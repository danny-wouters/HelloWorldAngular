import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { LoggerService } from './logger.service';
import { HomeComponent } from './home/home.component';
import { AutoListComponent } from './auto/auto-list/auto-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AutoDetailComponent } from './auto/auto-detail/auto-detail.component';
import { AutoModule } from './auto/auto.module';
import { FilmModule } from './film/film.module';
import { FilmSearchComponent } from './film/film-search/film-search.component';
import { BestellingListComponent } from './bestelling/bestelling-list/bestelling-list.component';
import { BestellingModule } from './bestelling/bestelling.module';
import { BestellingCreateComponent } from './bestelling/bestelling-create/bestelling-create.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_helpers/auth-guard';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'demo', component: DemoComponent},
  { path: 'autos', component: AutoListComponent},
  { path: 'autos/:id', component: AutoDetailComponent},
  { path: 'film', component: FilmSearchComponent},
  { path: 'bestellingen', component: BestellingListComponent, canActivate: [AuthGuard]},
  { path: 'bestellingen/nieuw', component: BestellingCreateComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    HomeComponent,
    PageNotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AutoModule,
    BestellingModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    LoggerService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
