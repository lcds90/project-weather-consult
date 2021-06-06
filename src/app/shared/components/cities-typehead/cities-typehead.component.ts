import { CitiesService } from './../../services/cities.service';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CityTypeaheadItem } from '../../models/city-typeahead-item.model';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead/public_api';
@Component({
  selector: 'app-cities-typehead',
  templateUrl: './cities-typehead.component.html',
  styleUrls: ['./cities-typehead.component.scss']
})
export class CitiesTypeheadComponent implements OnInit {

  dataSource$: Observable<CityTypeaheadItem[]>
  search: string;
  constructor(private citiesService: CitiesService) { }

  ngOnInit(): void {
    this.dataSource$ = new Observable(
      (subscriber: Subscriber<string>) => subscriber.next(this.search)
    )
      .pipe(
        switchMap(query => this.citiesService.getCities(query))
      );
  }

  onSelected(match: TypeaheadMatch){
    console.log(match.item);
  }

}
