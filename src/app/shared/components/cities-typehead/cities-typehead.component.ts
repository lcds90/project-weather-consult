import { CitiesService } from './../../services/cities.service';
import { Component, OnInit } from '@angular/core';
import { Observable, of, OperatorFunction, Subscriber } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { CityTypeaheadItem } from '../../models/city-typeahead-item.model';

@Component({
  selector: 'app-cities-typehead',
  templateUrl: './cities-typehead.component.html',
  styleUrls: ['./cities-typehead.component.scss']
})
export class CitiesTypeheadComponent implements OnInit {

  dataSource$: Observable<CityTypeaheadItem[]>
  // search: string;
  constructor(private citiesService: CitiesService) { }

  ngOnInit(): void {
    // this.dataSource$ = new Observable(
    //   (subscriber: Subscriber<string>) => subscriber.next(this.search)
    // )
    //   .pipe(
    //     switchMap(query => this.citiesService.getCities(query))
    //   );
  }
  model: any;
  searching = false;
  searchFailed = false;
  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.citiesService.getCities(term).pipe(
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
      tap(() => this.searching = false)
    )

  onSelected(match: any) {
    console.log(match.item);
  }

}
