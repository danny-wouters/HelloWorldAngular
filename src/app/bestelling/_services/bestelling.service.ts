import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Bestelling } from '../_models/bestelling';

@Injectable({
  providedIn: 'root'
})
export class BestellingService {

  constructor(private _http: HttpClient) { }

  getBestellingen(): Observable<Bestelling[]> {
    return this._http.get<Bestelling[]>(environment.apiUrl + 'bestelling');
  }
}
