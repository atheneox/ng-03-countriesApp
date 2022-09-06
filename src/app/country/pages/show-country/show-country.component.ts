import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';


@Component({
  selector: 'app-show-country',
  templateUrl: './show-country.component.html'
})
export class ShowCountryComponent implements OnInit {

  country!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.countryService.searchByCode(id)),
        tap(country => console.log('country', country))
      )
      .subscribe(country => this.country = country[0])

    // this.activatedRoute.params
    //   .subscribe(({ id }) => {
    //     this.countryService.searchByCode(id)
    //       .subscribe(country => {
    //       })
    //   })
  }
}
