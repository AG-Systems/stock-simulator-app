import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
  
  constructor() { 
      $.getJSON('https://www.highcharts.com/samples/data/aapl-c.json', (data) => {
      // Create the chart
      Highcharts.stockChart('container', {
  
  
          rangeSelector: {
              selected: 1
          },
  
          title: {
              text: 'AAPL Stock Price'
          },
  
          series: [{
              name: 'AAPL',
              data: data,
              tooltip: {
                  valueDecimals: 2
              }
          }]
      });
  });
  }

  ngOnInit() {
  }

}
