import { PokemonService } from './../../../shared/services/pokemon-service/pokemon.service';
import { PokemonInfo } from './../../../shared/interfaces/pokemon.interface';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-summary',
  templateUrl: './pokemon-summary.component.html',
  styleUrls: ['./pokemon-summary.component.scss']
})
export class PokemonSummaryComponent implements OnInit {

  @Input() pokemonInfo: PokemonInfo;
  @Output() openPokemonInfo: EventEmitter<string> = new EventEmitter();

  public themeColor: { backgroundColor: string; fontColor: string; };

  constructor(
    private pokemonService: PokemonService,
    private router: Router
    ) { }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.themeColor = this.pokemonService.getThemeColor(changes.pokemonInfo.currentValue);
  }

  openInfo() {
    localStorage.setItem('currentPokemonName', this.pokemonInfo.name);
    localStorage.setItem('currentPokemonColor', this.themeColor.backgroundColor);
    this.router.navigateByUrl(`/pokemon/${this.pokemonInfo.id}`);
  }

}
