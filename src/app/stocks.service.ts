import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  constructor(private http: Http) { }

  // Get all posts from the API
  getAllPosts(): Observable<any> {
    return this.http.get('/api/stocks')
      .map(res => res.json());
  }

  getStock(symbol?): Observable<any> {
    
    return this.http.get('/api/stocks/' + symbol)
      .map(res => res.json());
    
  }
  
  getOverview(): Observable<any> {
    return this.http.get('/api/mystocks')
      .map(res => res.json());
  }
  
}