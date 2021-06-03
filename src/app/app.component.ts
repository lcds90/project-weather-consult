import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  links = [
    { title: 'Home', fragment: '' },
    { title: 'Bookmarks', fragment: 'bookmarks' }
  ];

  constructor(public route: ActivatedRoute) { }
}
