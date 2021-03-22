import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { LoggerService } from './logger.service';
import { HomeComponent } from './home/home.component';
import { AutoListComponent } from './auto-list/auto-list.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'demo', component: DemoComponent},
  { path: 'auto-list', component: AutoListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    HomeComponent,
    AutoListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
