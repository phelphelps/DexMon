import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonTypeCircleComponent } from './pokemon-type-circle.component';

@NgModule({
  declarations: [PokemonTypeCircleComponent],
  imports: [
    CommonModule
  ],
  exports: [PokemonTypeCircleComponent],
  providers: [],
})
export class PokemonTypeCircleModule {}