import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './helper/auth.interceptor';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './tool/navbar/navbar.component';
import { RegistrationComponent } from './registration/registration.component';
import { ToastComponent } from './tool/toast/toast.component';
import { CardComponent } from './tool/card/card.component';
import { FilmListComponent } from './media/film/film-list/film-list.component';
import { FilmDetailComponent } from './media/film/film-detail/film-detail.component';
import { ItemListComponent } from './tool/item-list/item-list.component';
import { WatchlistListComponent } from './watchlist/watchlist-list/watchlist-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    RegistrationComponent,
    ToastComponent,
    CardComponent,
    FilmListComponent,
    FilmDetailComponent,
    ItemListComponent,
    WatchlistListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
