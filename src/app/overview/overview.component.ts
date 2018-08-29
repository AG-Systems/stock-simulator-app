import { Component, OnInit, HostListener } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  
  public innerWidth: any;
  public innerHeight: any;
  
  mystocks = [
  { id: 1, name: 'Google', symbol: "GOOGL", shares: 5 },
  { id: 2, name: 'Tesla', symbol: "TSLA", shares: 5 },
  { id: 3, name: 'Apple', symbol: "AAPL", shares: 5 },
  { id: 4, name: 'Microsoft', symbol: "MSFT", shares: 5 },
  { id: 5, name: 'Micron', symbol: "MU", shares: 5 },
  { id: 6, name: 'AMD', symbol: "AMD", shares: 5 },
  { id: 7, name: 'Intel', symbol: "INTC", shares: 5 },
];

  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: ''},
  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  public lineChartOptions:any = {
    responsive: true
  };
  
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = false;
  public lineChartType:string = 'line';
 
  constructor() {
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight; 
  }
  /*
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
  }
  */
}
