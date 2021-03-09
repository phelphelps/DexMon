import { Component, Input, OnInit } from '@angular/core';
import { Type } from '../../shared/interfaces/pokemon.interface';

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
