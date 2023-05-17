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
import { ItemListComponent } from './tool/item-list/item-list.component';
import { WatchlistListComponent } from './watchlist/watchlist-list/watchlist-list.component';
import { UserConfigurationComponent } from './home/user-configuration/user-configuration.component';
import { SearchbarComponent } from './tool/searchbar/searchbar.component';
import { FilmListComponent } from './media/film-list/film-list.component';
import { ItemDetailComponent } from './media/item-detail/item-detail.component';
import { SerieListComponent } from './media/serie-list/serie-list.component';
import { CalendarComponent } from './tool/calendar/calendar.component';
import { WatchlistActiveComponent } from './watchlist/active/watchlist-active/watchlist-active.component';
import { WatchlistEditComponent } from './watchlist/edit/watchlist-edit/watchlist-edit.component';
import { WatchlistDetailComponent } from './watchlist/detail/watchlist-detail/watchlist-detail.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgxPaginationModule } from 'ngx-pagination';

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
    ItemListComponent,
    WatchlistListComponent,
    UserConfigurationComponent,
    SearchbarComponent,
    ItemDetailComponent,
    SerieListComponent,
    CalendarComponent,
    WatchlistActiveComponent,
    WatchlistEditComponent,
    WatchlistDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    NgxPaginationModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
