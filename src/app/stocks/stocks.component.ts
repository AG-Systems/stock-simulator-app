import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Highcharts from 'highcharts/highstock';
import axios from 'axios';
import $ from 'jquery';
import { StocksService } from '../stocks.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
  
  
  stock: any = [];
  
  
  constructor(private route:ActivatedRoute, private stocksService: StocksService) { 

  }
  
  ngOnInit(): void {
    // Retrieve posts from the API
    this.stocksService.getStock(this.route.snapshot.params["stock"]).subscribe(stock => {
      this.stock = stock;
      
      console.log(stock);
    });
  }

}
