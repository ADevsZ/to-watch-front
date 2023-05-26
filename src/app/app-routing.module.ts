import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { AuthGuard } from './helper/auth.guard';
import { HomeComponent } from './component/home/home.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { UserConfigurationComponent } from './component/home/user-configuration/user-configuration.component';
import { FilmListComponent } from './component/media/film-list/film-list.component';
import { MediaDetailComponent } from './component/media/media-detail/media-detail.component';
import { SerieListComponent } from './component/media/serie-list/serie-list.component';
import { WatchlistListComponent } from './component/watchlist/watchlist-list/watchlist-list.component';
import { WatchlistEditComponent } from './component/watchlist/watchlist-edit/watchlist-edit.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'configuration', component: UserConfigurationComponent, canActivate: [AuthGuard] },
  { path: 'films', component: FilmListComponent, canActivate: [AuthGuard] },
  { path: 'series', component: SerieListComponent, canActivate: [AuthGuard] },
  { path: 'films/:id', component: MediaDetailComponent, canActivate: [AuthGuard] },
  { path: 'series/:id', component: MediaDetailComponent, canActivate: [AuthGuard] },
  { path: 'watchlists', component: WatchlistListComponent, canActivate: [AuthGuard] },
  { path: 'watchlists/:id', component: WatchlistEditComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
