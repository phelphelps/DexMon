import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeApiService } from './poke-api.service';

@NgModule({
  declarations: [],
  imports: [ CommonModule ],
  exports: [],
  providers: [PokeApiService],
})
export class PokeApiServiceModule {}