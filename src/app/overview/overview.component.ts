import { Component, OnInit, HostListener } from '@angular/core';
import $ from 'jquery';
import * as Highcharts from 'highcharts/highstock';

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
  public lineChartLabels:Array<any> = ['8:30AM', '9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM'];
  
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

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight; 
    
      let data = [
      [
          1472477400000,
          106.82
      ],
      [
          1472563800000,
          106
      ],
      [
          1472650200000,
          106.1
      ],
      [
          1472736600000,
          106.73
      ],
      [
          1472823000000,
          107.73
      ],
      [
          1472823000000,
          107.73
      ],
      
  ]

      let chart = Highcharts.stockChart('container', {
  
          chart: {
              height: 400
          },
  
          title: {
              text: 'Summary'
          },
  
          subtitle: {
              text: ""
          },
  
          rangeSelector: {
              selected: 1
          },
  
          series: [{
              name: 'AAPL Stock Price',
              data: data,
              type: 'area',
              threshold: null,
              tooltip: {
                  valueDecimals: 2
              }
          }],
  
          responsive: {
              rules: [{
                  condition: {
                      maxWidth: 500
                  },
                  chartOptions: {
                      chart: {
                          height: 300
                      },
                      subtitle: {
                          text: null
                      },
                      navigator: {
                          enabled: false
                      }
                  }
              }]
          }
      });
    
  }
  /*
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
  }
  */
}
