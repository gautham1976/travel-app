import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TravelRegistrationComponent } from './travel-registration/travel-registration.component';
import { ViewDestinationsComponent } from './view-destinations/view-destinations.component';
import { SearchCountryComponent } from './search-country/search-country.component';

@NgModule({
  declarations: [
    AppComponent,
    TravelRegistrationComponent,
    ViewDestinationsComponent,
    SearchCountryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
