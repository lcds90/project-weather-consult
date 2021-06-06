import { CitiesService } from './../../services/cities.service';
import { Component, OnInit, Optional, Self } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CityTypeaheadItem } from '../../models/city-typeahead-item.model';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead/public_api';
import { ControlValueAccessor, NgControl } from '@angular/forms';
@Component({
  selector: 'app-cities-typehead',
  templateUrl: './cities-typehead.component.html',
  styleUrls: ['./cities-typehead.component.scss']
})
export class CitiesTypeheadComponent implements OnInit, ControlValueAccessor {

  disabled: boolean;
  loading: boolean;
  private onChange: (value: CityTypeaheadItem) => void;
  private onTouched: () => void;
  dataSource$: Observable<CityTypeaheadItem[]>
  search: string;
  constructor(private citiesService: CitiesService,
    @Optional() @Self() public control: NgControl) { 
      control.valueAccessor = this;
    }

  ngOnInit(): void {
    this.dataSource$ = new Observable(
      (subscriber: Subscriber<string>) => subscriber.next(this.search)
    )
      .pipe(
        switchMap((query: string) => this.citiesService.getCities(query))
      );
  }

  onSelected(match: TypeaheadMatch) {
    // console.log(match.item);
    this.onTouched();
    this.onChange(match.item);
  }

  // metodos do control value acessor

  // ter noção qd foi modificado, salvar instancia da função dentor do componente
  registerOnChange(fn: (value: CityTypeaheadItem) => void) {
    this.onChange = fn;
  }

  // ter noção de quando input selecionado
  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  // componente pai desativar-lo
  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled
  }

  // componente pai setar o valor para reagir ao filho
  writeValue() {

  }

}
