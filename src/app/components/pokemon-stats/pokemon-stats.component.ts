import { Stats } from './../../shared/interfaces/pokemon.interface';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { POKEMON_MAX_STATS } from 'src/app/shared/constants/pokemon.constants';

@Component({
  selector: 'app-pokemon-stats',
  templateUrl: './pokemon-stats.component.html',
  styleUrls: ['./pokemon-stats.component.scss']
})
export class PokemonStatsComponent implements OnChanges {

  @Input() color: string;
  @Input() stats: (Stats)[];
  private maxStat = POKEMON_MAX_STATS;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.stats = changes.stats.currentValue;
    this.setIconToStats();
  }

  calcStatPercent(maxValue: number, pokemonValue: number) {
    const result = (pokemonValue / maxValue) * 100;
    return `${result}`;
  }

  setIconToStats() {
    if (this.stats) {
      this.stats.forEach(stat => {
        switch(stat.name) {
          case 'hp':
            stat.icon = 'mdi-heart-multiple-outline';
            stat.description = 'HP';
            stat.percent = this.calcStatPercent(this.maxStat.HP, stat.baseStat);
            break
          case 'attack':
            stat.icon = 'mdi-sword';
            stat.description = 'attack';
            stat.percent = this.calcStatPercent(this.maxStat.attack, stat.baseStat);
            break
          case 'defense':
            stat.icon = 'mdi-shield-half-full';
            stat.description = 'defense';
            stat.percent = this.calcStatPercent(this.maxStat.defence, stat.baseStat);
            break
          case 'special-attack':
            stat.icon = 'mdi-sword-cross';
            stat.description = 'Spec. Attack';
            stat.percent = this.calcStatPercent(this.maxStat.specialAttack, stat.baseStat);
            break
          case 'special-defense':
            stat.icon = 'mdi-shield-star-outline';
            stat.description = 'Spec. Defense';
            stat.percent = this.calcStatPercent(this.maxStat.specialDefence, stat.baseStat);
            break
          case 'speed':
            stat.icon = 'mdi-snail';
            stat.description = 'Speed';
            stat.percent = this.calcStatPercent(this.maxStat.speed, stat.baseStat);
            break
        }
      })
    }
  }

}

