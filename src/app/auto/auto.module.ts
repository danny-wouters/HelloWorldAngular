import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoListComponent } from './auto-list/auto-list.component';
import { AutoDetailComponent } from './auto-detail/auto-detail.component';



@NgModule({
  declarations: [
    AutoListComponent,
    AutoDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AutoListComponent,
    AutoDetailComponent
  ]
})
export class AutoModule { }
