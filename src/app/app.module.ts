import { PokemonDetailsModule } from './components/pokemon-details/pokemon-details.module';
import { CardModule } from './shared/components/card/card.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    PokemonDetailsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
