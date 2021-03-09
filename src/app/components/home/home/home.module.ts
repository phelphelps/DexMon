import { NavbarModule } from '../../../shared/components/navbar/navbar.module';
import { SearchModule } from '../search/serach.module';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonNotFoundModule } from 'src/app/shared/components/pokemon-not-found/pokemon-not-found.module';
import { DiscoverPokemonModule } from '../discover-pokemon/discover-pokemon.module';
import { PokemonSummaryModule } from '../pokemon-sumary/pokemon-summary.module';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SearchModule,
    PokemonNotFoundModule,
    PokemonSummaryModule,
    DiscoverPokemonModule,
    NavbarModule
  ],
  exports: [HomeComponent],
  providers: [],
})
export class HomeModule {}