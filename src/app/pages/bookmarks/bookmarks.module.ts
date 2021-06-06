import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { BookmarksPage } from './containers/bookmarks/bookmarks.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bookmarkReducer } from './state/bookmarks.reducer';

@NgModule({
  declarations: [
    BookmarksPage
  ],
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature('bookmarks', bookmarkReducer),
  ]
})
export class BookmarksModule { }
