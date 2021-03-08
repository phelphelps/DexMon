import { Type } from './../../interfaces/pokemon.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-type-circle',
  templateUrl: './pokemon-type-circle.component.html',
  styleUrls: ['./pokemon-type-circle.component.scss']
})
export class PokemonTypeCircleComponent implements OnInit {

  @Input() types: (Type)[];

  constructor() { }

  ngOnInit(): void {
  }

}
