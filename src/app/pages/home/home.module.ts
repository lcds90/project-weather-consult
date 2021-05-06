import { HomeEffects } from './state/home.effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from 'primeng/button';

import { HomePage } from './home.page';
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
    StoreModule.forFeature('home', homeReducer),
    EffectsModule.forFeature([HomeEffects])
  ],
})
export class HomeModule { }
