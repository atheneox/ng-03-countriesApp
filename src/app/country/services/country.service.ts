import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private _http: HttpClient) { }

  private apiUrl: string = 'https://restcountries.com';

  get httpParams() {
    return new HttpParams().set('fields', 'name,capital,flags,population,cca2,alpha2Code');
  }

  searchByName(query: string): Observable<Country[]> {

    const url = `${this.apiUrl}/v3.1/name/${query}`
    return this._http.get<Country[]>(url, { params: this.httpParams })
    // .pipe(
    //   catchError(err => of([]))
    // );

  }

  searchByCapital(query: string): Observable<Country[]> {

    const url = `${this.apiUrl}/v3.1/capital/${query}`
    return this._http.get<Country[]>(url, { params: this.httpParams })

  }

  // searchByRegion(query: string): Observable<Country[]> {

  //   const url = `${this.apiUrl}/v3.1/region/${query}`
  //   return this._http.get<Country[]>(url)

  // }

  searchByCode(id: string): Observable<Country[]> {

    const url = `${this.apiUrl}/v3.1/alpha/${id}`
    return this._http.get<Country[]>(url)

  }

  searchByBlocRegion(region: string): Observable<Country[]> {

    const url = `${this.apiUrl}/v2/regionalbloc/${region.toLowerCase()}`
    return this._http.get<Country[]>(url, { params: this.httpParams })
      .pipe(
        catchError(err => of())
      );

  }

}
