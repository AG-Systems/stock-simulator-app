import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import $ from 'jquery';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
  
  constructor(private route:ActivatedRoute) { 

  }
  
  ngOnInit(): void {
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
  ]
   // $.getJSON('https://www.highcharts.com/samples/data/aapl-c.json', function (data) {
   /*
      let chart = Highcharts.stockChart('container', {
  
          chart: {
              height: 400
          },
  
          title: {
              text: 'Highstock Responsive Chart'
          },
  
          subtitle: {
              text: this.route.snapshot.params["stock"]
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
      */
        this.options = {
            title : { text : 'simple chart' },
            series: [{
                data: [29.9, 71.5, 106.4, 129.2],
            }]
        };
  //});
  }

}
