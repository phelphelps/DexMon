import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PokemonDetailsComponent } from './pokemon-details.component';

const routes: Routes = [{
    path: '',
    component: PokemonDetailsComponent
  }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonDetailsRoutingModule {}
