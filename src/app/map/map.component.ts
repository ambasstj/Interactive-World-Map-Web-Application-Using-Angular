import { Component } from '@angular/core';
import { WorldBankService } from '../HTTP/WorldBankService.model';
import{ CountryData } from '../HTTP/CountryData.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {

  countryData: CountryData;

  constructor(private worldBankService: WorldBankService) {}

onSelectCountry(countryName: String): void{
  this.worldBankService.getCountryInfo(countryName).subscribe((data: CountryData) => {
    this.countryData = data;
  },
  
  (error) => {
    console.error(error);
  }
  );

}

}
