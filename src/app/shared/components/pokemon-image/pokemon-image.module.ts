import { PokemonImageComponent } from './pokemon-image.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [PokemonImageComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  exports: [PokemonImageComponent],
  providers: [],
})
export class PokemonImageModule {}