import { Abilities } from './../../shared/interfaces/pokemon.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-moves',
  templateUrl: './pokemon-moves.component.html',
  styleUrls: ['./pokemon-moves.component.scss']
})
export class PokemonMovesComponent implements OnInit {

  @Input() moves: (Abilities)[];

  constructor() { }

  ngOnInit(): void {
  }

}
