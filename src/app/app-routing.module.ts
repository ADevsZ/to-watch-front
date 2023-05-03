import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './helper/auth.guard';
import { HomeComponent } from './home/home.component';
import { FilmListComponent } from './media/film/film-list/film-list.component';
import { FilmDetailComponent } from './media/film/film-detail/film-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'films', component: FilmListComponent, canActivate: [AuthGuard] },
  { path: 'films/:id', component: FilmDetailComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
