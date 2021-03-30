import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BestellingListComponent } from './bestelling-list/bestelling-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BestellingService } from './_services/bestelling.service';



@NgModule({
  declarations: [BestellingListComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    BestellingService
  ]
})
export class BestellingModule { }
