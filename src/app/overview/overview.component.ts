import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
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

  }

}
