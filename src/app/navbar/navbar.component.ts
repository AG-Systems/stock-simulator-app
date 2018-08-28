import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';

import $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('visibilityChanged', [
      state('shown', style({ display: 'none' })),
      state('hidden', style({ display: 'inline' })),
      transition('shown => hidden', animate('10ms')),
      transition('hidden => shown', animate('10ms')),
    ])
  ]
})
export class NavbarComponent implements OnInit {
  visiblityState = 'shown';
  stocksearch = "";
  stocks = [
    { title: '$TSLA - Tesla' },
    { title: '$FB- Facebook' },
  ];
  constructor() {
    }

  public ngOnInit() {
          
  }
  

  sidebar() {
    if (this.visiblityState === 'hidden')
    {
      this.visiblityState = 'shown';
    } else {
      this.visiblityState = 'hidden';
    }
    
  }

}
