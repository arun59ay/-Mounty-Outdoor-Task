import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopratesMoviesComponent } from './pages/toprates-movies/toprates-movies.component';
import { UpcomingMoviesComponent } from './pages/upcoming-movies/upcoming-movies.component';

const routes: Routes = [

 
  { path: '', redirectTo: 'toprates-movies', pathMatch: 'full' },
  { path: 'toprates-movies', component: TopratesMoviesComponent, pathMatch: 'full', },
  { path: 'upcoming-movies', component: UpcomingMoviesComponent, pathMatch: 'full', },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
