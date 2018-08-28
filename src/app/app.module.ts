import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {SuiModule} from 'ng2-semantic-ui';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { OverviewComponent } from './overview/overview.component';


import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StocksComponent } from './stocks/stocks.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccountComponent } from './account/account.component';
import { TradeComponent } from './trade/trade.component';

const appRoutes: Routes = [
  { 
    path: 'stocks/:stock', 
    component: StocksComponent },
  {
    path: '',
    component: OverviewComponent
  },
  { path: 'trade', component: TradeComponent },  
  { path: 'account', component: AccountComponent },  
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OverviewComponent,
    HomeComponent,
    StocksComponent,
    PageNotFoundComponent,
    AccountComponent,
    TradeComponent
  ],
  imports: [
    BrowserModule,
    SuiModule,
    BrowserAnimationsModule,
    ChartsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
