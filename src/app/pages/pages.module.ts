import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PokedexComponent } from './pokedex/pokedex.component';
import { HomeComponent } from './home/home.component';
import { GamesComponent } from './games/games.component';
import { PokeIdComponent } from './poke-id/poke-id.component';
import { AngularCompModule } from '../angular-comp/angular-comp.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    PokedexComponent,
    HomeComponent,
    GamesComponent,
    PokeIdComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    AngularCompModule,
    RouterModule
  ]
})
export class PagesModule { }
