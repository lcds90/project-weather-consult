import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

import { LoaderComponent } from './loader/loader.component';
import { DetailedWeatherComponent } from './detailed-weather/detailed-weather.component';
import { CitiesTypeheadComponent } from './cities-typehead/cities-typehead.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TypeaheadModule.forRoot()
  ],
  declarations: [
    LoaderComponent,
    DetailedWeatherComponent,
    CitiesTypeheadComponent,
  ],
  exports: [
    LoaderComponent,
    DetailedWeatherComponent,
    CitiesTypeheadComponent
  ]
})
export class ComponentsModule {
}
