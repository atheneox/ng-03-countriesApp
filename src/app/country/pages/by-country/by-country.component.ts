import { TemplateBindingParseResult } from '@angular/compiler';
import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
      li{
        cursor:pointer
      }
    `
  ]
})
export class ByCountryComponent {

  constructor(private countryService: CountryService) { }

  query: string = '';
  error: boolean = false;
  countries: Country[] = [];
  suggestedCountries: Country[] = [];
  showSuggested: boolean = false;

  search(query: string) {

    this.error = false;
    this.query = query;

    console.log(this.query);

    this.countryService.searchByName(this.query)
      .subscribe({
        next: (countries: Country[]) => {
          this.countries = countries;
          console.log(countries);
        }, error: (e) => {
          this.error = true;
        }
      });
  }

  sugest(query: string) {
    this.query = query;
    this.error = false;
    this.showSuggested = true;

    this.countryService.searchByName(query)
      .subscribe(
        {
          next: (countries: Country[]) => {
            this.suggestedCountries = countries.splice(0, 6);
          }, error: (e) => {
            this.suggestedCountries = [];
          }
        }
      )
  }

  searchSuggested(query: string) {
    this.search(query);

  }

}
