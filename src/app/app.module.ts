import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './helper/auth.interceptor';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/tool/navbar/navbar.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { CardMediaComponent } from './component/media/card-media/card-media.component';
import { WatchlistListComponent } from './component/watchlist/watchlist-list/watchlist-list.component';
import { UserConfigurationComponent } from './component/home/user-configuration/user-configuration.component';
import { SearchbarComponent } from './component/tool/searchbar/searchbar.component';
import { FilmListComponent } from './component/media/film-list/film-list.component';
import { MediaDetailComponent } from './component/media/media-detail/media-detail.component';
import { SerieListComponent } from './component/media/serie-list/serie-list.component';
import { CalendarComponent } from './component/tool/calendar/calendar.component';
import { WatchlistActiveComponent } from './component/watchlist/watchlist-active/watchlist-active.component';
import { WatchlistEditComponent } from './component/watchlist/watchlist-edit/watchlist-edit.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LogsComponent } from './component/tool/logs/logs.component';
import { WatchlistCardComponent } from './component/watchlist/watchlist-card/watchlist-card.component';
import { RatingMediaComponent } from './component/tool/rating-media/rating-media.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    RegistrationComponent,
    CardMediaComponent,
    FilmListComponent,
    WatchlistListComponent,
    UserConfigurationComponent,
    SearchbarComponent,
    MediaDetailComponent,
    SerieListComponent,
    CalendarComponent,
    WatchlistActiveComponent,
    WatchlistEditComponent,
    LogsComponent,
    WatchlistCardComponent,
    RatingMediaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    NgxPaginationModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    NgxSpinnerModule,
    AutocompleteLibModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
