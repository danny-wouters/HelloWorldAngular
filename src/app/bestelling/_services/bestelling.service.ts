import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Bestelling } from '../_models/bestelling';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BestellingService {

  constructor(private _http: HttpClient) { }

  getBestellingen(): Observable<Bestelling[]> {
    return this._http.get<Bestelling[]>(environment.apiUrl + 'bestelling')
      .pipe(map((entries: any[]) =>
        entries.map((entry: any) =>
           new Bestelling(entry.bestellingID, entry.artikel, entry.prijs)
        )
      )
    );
  }

  addBestelling(bestelling: Bestelling): Observable<any> {
    return this._http.post(environment.apiUrl + 'bestelling', bestelling);
  }
}
