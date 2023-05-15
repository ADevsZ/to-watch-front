import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './helper/auth.guard';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { ItemListComponent } from './tool/item-list/item-list.component';
import { UserConfigurationComponent } from './home/user-configuration/user-configuration.component';
import { SearchbarComponent } from './tool/searchbar/searchbar.component';
import { FilmListComponent } from './media/film-list/film-list.component';
import { ItemDetailComponent } from './media/item-detail/item-detail.component';
import { SerieListComponent } from './media/serie-list/serie-list.component';
import { CalendarComponent } from './tool/calendar/calendar.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'films', component: FilmListComponent, canActivate: [AuthGuard] },
  { path: 'item_list', component: ItemListComponent, canActivate: [AuthGuard] },
  { path: 'user-configuration', component: UserConfigurationComponent, canActivate: [AuthGuard] },
  { path: 'series', component: SerieListComponent, canActivate: [AuthGuard] },
  { path: 'films/:id', component: ItemDetailComponent, canActivate: [AuthGuard] },
  { path: 'series/:id', component: ItemDetailComponent, canActivate: [AuthGuard] },
  { path: 'calendar', component: CalendarComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
