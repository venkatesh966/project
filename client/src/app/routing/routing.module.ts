import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NearbyplacesComponent } from '../components/nearbyplaces/nearbyplaces.component';

const routes: Routes = [
  { path: '', component: NearbyplacesComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class RoutingModule { }
