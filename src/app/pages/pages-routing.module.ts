import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexComponent } from './pokedex/pokedex.component';
import { HomeComponent } from './home/home.component';
import { GamesComponent } from './games/games.component';
import { PokeIdComponent } from './poke-id/poke-id.component';

const routes: Routes = [
  {
    path: '',
    children:[
        {path: 'Home', component: HomeComponent},
        {path: 'Pokedex', component: PokedexComponent},
        {path: 'Games', component: GamesComponent},
        {path: 'poke/:id', component: PokeIdComponent },
        {path: '**', redirectTo: 'Home'},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
