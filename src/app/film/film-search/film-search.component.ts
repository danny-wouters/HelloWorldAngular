import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-film-search',
  templateUrl: './film-search.component.html',
  styleUrls: ['./film-search.component.css']
})
export class FilmSearchComponent implements OnInit {
  public filmNaam: string;
  public response: any;

  constructor(private _http: HttpClient) { }

  ngOnInit() {
  }

  zoekFilm() {
    //API aanroepen
    this._http.get("http://www.omdbapi.com/?t=" + this.filmNaam + "&apikey=48cc3813")
      .subscribe(
        (res) => {
          this.response = res;
        }
      );
  }
}
