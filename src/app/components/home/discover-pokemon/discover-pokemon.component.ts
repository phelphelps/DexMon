import { PokemonService } from './../../../shared/services/pokemon-service/pokemon.service';
import { PokeApiService } from './../../../shared/services/poke-api-service/poke-api.service';
import { PokemonInfo } from 'src/app/shared/interfaces/pokemon.interface';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-discover-pokemon',
  templateUrl: './discover-pokemon.component.html',
  styleUrls: ['./discover-pokemon.component.scss']
})
export class DiscoverPokemonComponent {

  public pokemonList: (PokemonInfo)[] = [];
  public loading: boolean = true;

  constructor(
    private pokeApi: PokeApiService,
    private pokemonService: PokemonService,
    private router: Router
    ) { }

  ngOnInit() {
    this.getSomePokemon(6);
  }

  getSomePokemon(nTimes: number) {
    while(nTimes > 0) {
      nTimes = nTimes - 1;
      const offset = this.getRandomNumber(1, 898);
      this.pokeApi.getPokemonList(offset).then(res =>{
        const { data: { results: pokemon} } = res;
        pokemon.forEach(pokemonItem => {
          this.pokeApi.getPokemonInfo(pokemonItem.name).then(result => {
            const pokemonObject = this.pokemonService.createPokemonObject(result.data, result.data.id);
            const theme = this.pokemonService.getThemeColor(pokemonObject);
            pokemonObject.color = theme.backgroundColor;
            this.pokemonList.push(pokemonObject);
            this.loading = false;
          })
        });
      })
    }
  }

  getThemeColor() {
    this.pokemonList.forEach(pokemon => {
      const theme = this.pokemonService.getThemeColor(pokemon);
      pokemon.color = theme.backgroundColor;
    })
  }

  getRandomNumber(min, max) {
    const number = Math.random() * (max - min) + min;
    return number.toFixed(0);
  }

  reloadPokemon() {
    this.loading = true;
    this.pokemonList = [];
    this.getSomePokemon(6);
  }

  openPokemonInfo(pokemonId: string, pokemonName: string) {
    localStorage.setItem('currentPokemonName', pokemonName);
    this.router.navigateByUrl(`/pokemon/${pokemonId}`);
  }

}
