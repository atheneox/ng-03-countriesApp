import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [` 
  button{
    margin-right:5px;
  }
  `]
})
export class ByRegionComponent {

  constructor(private countryService: CountryService) { }

  regions: string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC'];
  activeRegion: string = '';
  countries: Country[] = [];

  activateRegion(region: string) {

    if (region === this.activeRegion) { return; }

    this.activeRegion = region;

    this.countries = [];

    this.countryService.searchByBlocRegion(region)
      .subscribe({
        next: (countries: Country[]) => { this.countries = countries; console.log(this.countries); }
      });
  }

  getClassCSS(region: string): string {
    return (region === this.activeRegion) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

}

  // query: string = '';
  // error: boolean = false;
  // countries: Country[] = [];

  // search(query: string) {

  //   this.error = false;
  //   this.query = query;

  //   console.log(this.query);

  //   this.countryService.searchByRegion(this.query)
  //     .subscribe({
  //       next: (country: Country[]) => {
  //         this.countries = country
  //       }, error: (e) => {
  //         this.error = true;
  //       }
  //     });
  // }

  // sugest(query: string) {
  //   this.error = false;

  // }


