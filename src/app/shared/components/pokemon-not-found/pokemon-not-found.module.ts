import { PokemonNotFoundComponent } from './pokemon-not-found.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PokemonNotFoundComponent],
  imports: [ CommonModule ],
  exports: [PokemonNotFoundComponent],
  providers: [],
})
export class PokemonNotFoundModule {}