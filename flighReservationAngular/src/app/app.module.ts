import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FindFlightsComponent } from './components/find-flights/find-flights.component';
import { DisplayFlightsComponent } from './components/display-flights/display-flights.component';
import { PassengerDetailsComponent } from './components/passenger-details/passenger-details.component';
import { ConfirmReservationComponent } from './components/confirm-reservation/confirm-reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    FindFlightsComponent,
    DisplayFlightsComponent,
    PassengerDetailsComponent,
    ConfirmReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
