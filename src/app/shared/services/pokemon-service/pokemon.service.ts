import { POKEMON_TYPES } from './../../constants/pokemon.constants';
import { PokemonInfo } from './../../interfaces/pokemon.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokemonTypes = POKEMON_TYPES;

  constructor() { }

  createPokemonObject(pokemon: any, pokemonId: string): PokemonInfo {
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

      const pokemonSprites = [];

      for (let index in pokemon.sprites) {
        const sprite = pokemon.sprites[index];
        if (typeof sprite === 'string') {
          pokemonSprites.push(sprite);
        }
      }
      
      const pokemontypes = pokemon.types.map(typeItem => {
        const type = {
          name: typeItem.type.name,
          url: typeItem.type.url
        }
        return type
      })

      const pokemonObject = {
        id: pokemon.id,
        name: pokemon.species.name,
        photo: `https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png`,
        types: pokemontypes,
        stats: pokemonStats,
        abilities: pokemonAbilities,
        sprites: pokemonSprites
      }

      pokemonObject.types.forEach(type => {
        type['backgroundColor'] = this.pokemonTypes[type.name].backgroundColor;
        type['fontColor'] = this.pokemonTypes[type.name].fontColor;
      })
     return pokemonObject;
    }

  getThemeColor(pokemon: PokemonInfo) {
    if (pokemon &&pokemon.types instanceof Array) {
      const colors = pokemon.types[0];
      return  {
        backgroundColor: colors.backgroundColor,
        fontColor: colors.fontColor
      }
    }
  }
}
