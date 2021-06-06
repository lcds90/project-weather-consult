import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as moment from 'moment-timezone';
import 'moment/locale/pt-br';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  links = [
    { title: 'Home', url: '' },
    { title: 'Bookmarks', url: 'bookmarks' }
  ];

  constructor(public route: ActivatedRoute) {
    moment.locale('pt-br');
  }
}
