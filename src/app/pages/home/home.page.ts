import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { select, Store } from '@ngrx/store';

import * as fromHomeActions from "./state/home.actions"
import * as fromHomeSelectors from "./state/home.selectors"

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

 searchControl: FormControl;
 text!: string;
 constructor(private store: Store) { 
  this.searchControl = new FormControl('', Validators.required);
 }

  ngOnInit(): void {
    this.store.pipe(select(fromHomeSelectors.selectHomeText))
      .subscribe(text => this.text = text)
  }

  doSearch(): void {
    const text: string = this.searchControl.value
    this.store.dispatch(fromHomeActions.changeText({ text }))
  }

}