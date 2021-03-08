import { MatButtonModule } from '@angular/material/button';
import { PokemonImageModule } from './../../../shared/components/pokemon-image/pokemon-image.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonSummaryComponent } from './pokemon-summary.component';

@NgModule({
  declarations: [PokemonSummaryComponent],
  imports: [
    CommonModule,
    PokemonImageModule,
    MatButtonModule
  ],
  exports: [
    PokemonSummaryComponent
  ],
  providers: [],
})
export class PokemonSummaryModule {}