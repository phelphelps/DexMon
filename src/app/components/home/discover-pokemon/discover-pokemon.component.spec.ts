import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverPokemonComponent } from './discover-pokemon.component';

describe('DiscoverPokemonComponent', () => {
  let component: DiscoverPokemonComponent;
  let fixture: ComponentFixture<DiscoverPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscoverPokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
