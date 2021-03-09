import { PokemonMovesModule } from './../pokemon-moves/pokemon-moves.module';
import { PokemonImageModule } from './../../shared/components/pokemon-image/pokemon-image.module';
import { PokemonDetailsRoutingModule } from './pokemon-details-routing.module';
import { PokemonDetailsComponent } from './pokemon-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatRippleModule } from '@angular/material/core';
import { PokemonStatsModule } from '../pokemon-stats/pokemon-stats.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PokemonTypeCircleModule } from '../pokemon-type-circle/pokemon-type-circle.module';

@NgModule({
  declarations: [PokemonDetailsComponent],
  imports: [
    CommonModule,
    PokemonDetailsRoutingModule,
    PokemonImageModule,
    PokemonStatsModule,
    PokemonTypeCircleModule,
    PokemonMovesModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule,
    MatProgressSpinnerModule
  ],
  exports: [PokemonDetailsComponent],
  providers: [],
})
export class PokemonDetailsModule {}