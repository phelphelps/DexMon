import { PokemonService } from './../../../shared/services/pokemon-service/pokemon.service';
import { PokemonInfo } from './../../../shared/interfaces/pokemon.interface';
import { PokeApiService } from '../../../shared/services/poke-api-service/poke-api.service';
import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public formSearch: FormGroup;

  @Output() pokemonFiltered: EventEmitter<any> = new EventEmitter();

  constructor (
    private formBuilder: FormBuilder,
    private pokeApi: PokeApiService,
    private pokemonService: PokemonService
    ) { }

  ngOnInit(): void {
    this.formSearch = this.formBuilder.group({
      search: new FormControl('8')
    })

    this.formSearch.get('search').valueChanges.pipe(
      debounceTime(600))
      .subscribe(query => this.loadFilteredPokemon(query))

  }

  loadFilteredPokemon(query: string) {
    if (query.trim()) {
      query = query.toLowerCase();
      this.pokeApi.getPokemonInfo(query).then(pokemon => {
        const pokemonObject = this.pokemonService.createPokemonObject(pokemon.data, pokemon.data.id);
        this.pokemonFiltered.emit({
          pokemon: pokemonObject,
          hasSearchInput: true
          });
      })
      .catch(() => this.pokemonFiltered.emit({
        pokemon: null,
        hasSearchInput: true
      }));
    } else {
      this.pokemonFiltered.emit({
        pokemon: null,
        hasSearchInput: false
      });
    }

  }

}
