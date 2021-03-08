import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonStatsComponent } from './pokemon-stats.component';

@NgModule({
  declarations: [PokemonStatsComponent],
  imports: [ CommonModule ],
  exports: [PokemonStatsComponent],
  providers: [],
})
export class PokemonStatsModule {}