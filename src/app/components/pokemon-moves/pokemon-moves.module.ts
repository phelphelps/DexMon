import { MatChipsModule } from '@angular/material/chips';
import { PokemonMovesComponent } from './pokemon-moves.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PokemonMovesComponent],
  imports: [
    CommonModule,
    MatChipsModule
  ],
  exports: [PokemonMovesComponent],
  providers: [],
})
export class PokemonMovesModule {}