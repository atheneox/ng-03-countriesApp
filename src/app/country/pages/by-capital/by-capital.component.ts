import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html'
})
export class ByCapitalComponent {

  constructor(private countryService: CountryService) { }

  query: string = '';
  error: boolean = false;
  countries: Country[] = [];

  search(query: string) {

    this.error = false;
    this.query = query;

    console.log(this.query);

    this.countryService.searchByCapital(this.query)
      .subscribe({
        next: (country: Country[]) => {
          this.countries = country
        }, error: (e) => {
          this.error = true;
        }
      });
  }

  sugest(query: string) {
    this.error = false;

  }

}
