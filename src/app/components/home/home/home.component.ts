import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonInfo } from '../../../shared/interfaces/pokemon.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  public pokemonNotFound: boolean;
  public pokemonInfo: PokemonInfo;
  public hasSearchInput: boolean;

  constructor(private router: Router) {
    localStorage.setItem('currentPokemonName', '')
  }

  ngOnInit(): void {
  }

  showPokemon(searchEvent: any) {
    if (searchEvent.hasSearchInput) {
      if (searchEvent.pokemon === null) {
        this.pokemonNotFound = true;
        this.hasSearchInput = true;
      } else {
        this.pokemonNotFound = false;
        this.hasSearchInput = true;
        this.pokemonInfo = searchEvent.pokemon;
      }
    } else {
      this.hasSearchInput = false;
    }
  }

  openPokemonInfo(id: string) {
    this.router.navigateByUrl(`/pokemon/${id}`)
  }
}
