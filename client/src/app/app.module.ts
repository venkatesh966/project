import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NearbyplacesComponent } from './components/nearbyplaces/nearbyplaces.component';
import { RoutingModule } from './routing/routing.module';
import { PlacesdetailsService } from './services/placesdetails.service';
import {  HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    NearbyplacesComponent
  ],
  imports: [
    BrowserModule, RoutingModule,HttpModule, FormsModule
  ],
  providers: [PlacesdetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
