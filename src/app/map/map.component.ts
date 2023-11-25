import { Component } from '@angular/core';
import { WorldBankService } from '../HTTP/WorldBankService.model';
import{ CountryData } from '../HTTP/CountryData.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {

  countryData: any;
  isSelected = false;

constructor(private worldBankService: WorldBankService) {}

ngOnInit():void{
  document.addEventListener('DOMContentLoaded', (event) => {
    
    const svgContainer = document.getElementById('svg');

    svgContainer.addEventListener('mouseover', (event) => {
       const targetPath = event.target as SVGElement;

       if (targetPath.tagName === 'path') {
          const countryName = targetPath.getAttribute('class');
          
          console.log(countryName)
          const countryPaths = document.querySelectorAll(`.${countryName}`) as NodeListOf<SVGElement>;
          countryPaths.forEach((path) =>{
            path.setAttribute('stroke-width','6')
            path.style.fill = 'lightblue';})
       }
       else{
       }
    });

    svgContainer.addEventListener('mouseout', (event) => {
       const targetPath = event.target as SVGElement;
       if (targetPath.tagName === 'path') {
        const countryName = targetPath.getAttribute('class');
        const countryPaths = document.querySelectorAll(`.${countryName}`) as NodeListOf<SVGElement>;
        countryPaths.forEach((path) =>{
          path.style.fill = 'rgb(240, 237, 237)'
          path.setAttribute('stroke-width', '2')
        })
      } 
  });
})

}

onSelectCountry(countryName: String): void{
  this.worldBankService.getCountryInfo(countryName).subscribe((data: CountryData) => {
    this.countryData = data[1];},);
    console.log(countryName)
}

noPathSelected(){
  this.countryData = null;
  console.log("The mouse left")
  console.log(this.countryData)
} 
select(){
  this.isSelected = true;
  console.log("Mouse entered and triggered this function")
}
}
