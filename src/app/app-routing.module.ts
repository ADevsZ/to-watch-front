import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './helper/auth.guard';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { FilmListComponent } from './media/film-list/film-list.component';
import { ItemDetailComponent } from './media/item-detail/item-detail.component';
import { SerieListComponent } from './media/serie-list/serie-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'films', component: FilmListComponent, canActivate: [AuthGuard] },
  { path: 'series', component: SerieListComponent, canActivate: [AuthGuard] },
  { path: 'films/:id', component: ItemDetailComponent, canActivate: [AuthGuard] },
  { path: 'series/:id', component: ItemDetailComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
