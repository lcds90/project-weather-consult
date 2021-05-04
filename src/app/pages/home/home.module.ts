import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from 'primeng/button';

import { HomePage } from './home.page';
import { StoreModule } from '@ngrx/store';
import { homeReducer } from './state/home.reducer';

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    CommonModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
    StoreModule.forFeature('home', homeReducer)
  ],
})
export class HomeModule { }
