import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BestellingListComponent } from './bestelling-list/bestelling-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BestellingService } from './_services/bestelling.service';
import { BestellingCreateComponent } from './bestelling-create/bestelling-create.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [BestellingListComponent, BestellingCreateComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    BestellingService
  ]
})
export class BestellingModule { }
