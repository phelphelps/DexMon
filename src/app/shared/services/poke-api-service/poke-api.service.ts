import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  constructor() { }

  getPokemonInfo(pokemonId: string): any {
    return axios.get(`/pokemon/${pokemonId}`);
  }

  getPokemonList( offset?: string, limit: string = '2') {
    return axios.get(`pokemon?limit=${limit}&offset=${offset}`);
  }

  getAbilities(pokemonId: string) {
    return axios.get(`/ability/${pokemonId}`);
  }

  getPokemonColor(pokemonId: string) {
    return axios.get(`/pokemon-color/${pokemonId}`);
  }
}
