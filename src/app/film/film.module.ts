import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmSearchComponent } from './film-search/film-search.component';
import { FormsModule} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [FilmSearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class FilmModule { }
