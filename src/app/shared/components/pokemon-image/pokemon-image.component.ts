import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pokemon-image',
  templateUrl: './pokemon-image.component.html',
  styleUrls: ['./pokemon-image.component.scss']
})
export class PokemonImageComponent implements OnChanges {

  @Input() imageUrl: string;
  @Input() color: string;
  @Input() compact: boolean;

  public imageLoaded: boolean;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.imageUrl) {
      this.imageLoaded = false;
    }
  }

  showImage() {
    this.imageLoaded = true;
  }

}
