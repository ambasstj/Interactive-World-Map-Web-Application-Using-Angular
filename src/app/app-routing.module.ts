import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './map/map.component';
import { CountryInfoComponent } from './country-info/country-info.component';

const routes: Routes = [
  {path: '', component: MapComponent},
  {path: 'country-info/:country', component: CountryInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
