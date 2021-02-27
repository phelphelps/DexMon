import { PokemonDetailsComponent } from './pokemon-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PokemonDetailsComponent],
  imports: [ CommonModule ],
  exports: [PokemonDetailsComponent],
  providers: [],
})
export class PokemonDetailsModule {}