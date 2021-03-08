import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { DiscoverPokemonComponent } from './discover-pokemon.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [DiscoverPokemonComponent],
  imports: [
    CommonModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatTooltipModule
  ],
  exports: [DiscoverPokemonComponent],
  providers: [],
})
export class DiscoverPokemonModule {}