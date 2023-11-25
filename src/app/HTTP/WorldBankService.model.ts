import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CountryData } from "./CountryData.model";

@Injectable({
    providedIn: 'root',
})
export class WorldBankService{

    public testProperty = 'placeholder'
    public apiURL = "http://api.worldbank.org/v2/country";

    constructor(private http: HttpClient){}

    getCountryInfo(countryName: String): Observable<CountryData> {
    const url = this.apiURL+'/'+countryName+'?format=json';
    console.log(url)
       return this.http.get<CountryData>(url)
    }
}