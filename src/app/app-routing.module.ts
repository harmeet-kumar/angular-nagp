import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputformComponent } from './inputform/inputform.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
    {
    path: 'form',
    component: InputformComponent
  },
  {
    path: 'details',
    component: DetailsComponent
  },
  {
    path: '',
    redirectTo: 'form',
    pathMatch: 'full'
  },
  {
    path: 'notfound',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'notfound',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
