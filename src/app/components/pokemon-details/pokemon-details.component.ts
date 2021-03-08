import { PokemonService } from './../../shared/services/pokemon-service/pokemon.service';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMON_TYPES } from './../../shared/constants/pokemon.constants';
import { Component, OnInit } from '@angular/core';
import { PokemonInfo } from 'src/app/shared/interfaces/pokemon.interface';
import { PokeApiService } from 'src/app/shared/services/poke-api-service/poke-api.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {
  public pokemon: PokemonInfo;
  private pokemonTypes: any = POKEMON_TYPES;
  public pokemonId: string;
  public themeColor: { backgroundColor: string; fontColor: string; };
  public loading: boolean = true;

  constructor(
    private pokemonAPI: PokeApiService,
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private pokemonService: PokemonService
    ) { }

  async ngOnInit() {
    this.pokemonId = this.activatedRoute.snapshot.paramMap.get('pokemonId')
    await this.pokemonAPI.getPokemonInfo(this.pokemonId).then(res => {
      const { data: pokemon } = res;
      this.pokemon = this.pokemonService.createPokemonObject(pokemon, this.pokemonId);
      this.themeColor = this.pokemonService.getThemeColor(this.pokemon);
      this.loading = false;
    }).catch((e) => console.log(e));
  }

  getPokemonColor(pokemonId: string) {
    this.pokemonAPI.getPokemonColor(pokemonId).then(res => {
      this.pokemon.color = res.data.name;
    })
  }

  backToHome() {
    this.route.navigateByUrl('/')
  }
}
