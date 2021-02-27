import { POKEMON_TYPES } from './../../shared/constants/pokemon.constants';
import { Component, OnInit } from '@angular/core';
import { PokemonInfo } from 'src/app/shared/interfaces/pokemon.interface';
import { PokeApiService } from 'src/app/shared/services/poke-api.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {
  public pokemon: PokemonInfo;
  private pokemonTypes: any = POKEMON_TYPES;

  constructor(private pokemonAPI: PokeApiService) { }

  async ngOnInit() {
    await this.pokemonAPI.getPokemonInfo(2).then(res => {
      const { data: pokemon } = res;
      this.createPokemonObject(pokemon);
      this.getPokemonColor(2);
      this.getPokemonTypesColor();
    }).catch(() => console.log('ue'));
  }

  private createPokemonObject(pokemon: any) {
    const pokemonStats = pokemon.stats.map(statItem => {
      const stat = {
        baseStat: statItem.base_stat,
        name: statItem.stat.name,
        url: statItem.stat.url,
        effort: statItem.effort
      }
      return stat
    });

    const pokemonAbilities = pokemon.abilities.map(abilityItem => {
      const ability = {
        name: abilityItem.ability.name,
        url: abilityItem.ability.url
      }
      return ability
    })

    const pokemonSprites = {
      backDefault: pokemon.back_default,
      backFemale: pokemon.back_female,
      backShiny: pokemon.back_shiny,
      backShinyFemale: pokemon.back_shiny_female,
      frontDefault: pokemon.front_default,
      frontFemale: pokemon.front_female,
      frontShiny: pokemon.front_shiny,
      frontShinyFemale: pokemon.front_shiny_female
    }

    const pokemontypes = pokemon.types.map(typeItem => {
      const type = {
        name: typeItem.type.name,
        url: typeItem.type.url
      }
      return type
    })

    this.pokemon = {
      id: pokemon.id,
      name: pokemon.species.name,
      photo: `https://pokeres.bastionbot.org/images/pokemon/7.png`,
      types: pokemontypes,
      stats: pokemonStats,
      abilities: pokemonAbilities,
      sprites: pokemonSprites
    }
  console.log(this.pokemon)
  }

  imageLoaded() {
    console.log('OK')
  }

  getPokemonColor(pokemonId: number) {
    this.pokemonAPI.getPokemonColor(pokemonId).then(res => {
      this.pokemon.color = res.data.name;
    })
  }

  getPokemonTypesColor(){
    this.pokemon.types.forEach(type => {
      type['backgroundColor'] = this.pokemonTypes[type.name].backgroundColor;
      type['fontColor'] = this.pokemonTypes[type.name].fontColor;
    })
    console.log(this.pokemon)
  }
}
