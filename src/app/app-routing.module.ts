import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';

const routes: Routes = [
  {
    path: '',
    children: [{
      path: '',
      loadChildren: () => import('./components/home/home/home.module').then(mod => mod.HomeModule)
    }]
  }, {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
