import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  DirectionsResponse,
  PokeAPI,
  PokemonInfo,
  Result,
} from 'src/app/services/poke.interfaces';




@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css'],
})
export class PokedexComponent implements OnInit {
  pokemonId!: PokeAPI;
  pokemons: Result[] = [];
  pokemonInfo: { [name: string]: PokemonInfo } = {};
  private urlPoke: string = 'https://pokeapi.co/api/v2/pokemon?limit=150';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<DirectionsResponse>(this.urlPoke).subscribe((data) => {
      if (data.results) {
        this.pokemons = data.results;

        this.pokemons.forEach((pokemon) => {
          this.http
            .get<PokemonInfo>(
              `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
            )
            .subscribe((info) => {
              this.pokemonInfo[pokemon.name!] = info;
            });
        });
      }
    });
  }

  getTypeClass(typeName: string): string {
    switch (typeName) {
      case 'fire':
        return 'fire-type';
      case 'water':
        return 'water-type';
      case 'grass':
        return 'grass-type';
      case 'electric':
        return 'electric-type';
      case 'bug':
        return 'bug-type';
      case 'flying':
        return 'flying-type';
      case 'normal':
        return 'normal-type';
      case 'ground':
        return 'ground-type';
      case 'fairy':
        return 'fairy-type';
      case 'fighting':
        return 'fighting-type';
      case 'psychic':
        return 'psychic-type';
      case 'rock':
        return 'rock-type';
      case 'steel':
        return 'steel-type';
      case 'ice':
        return 'ice-type';
      case 'ghost':
        return 'ghost-type';
      case 'dragon':
        return 'dragon-type';
        case 'poison':
          return 'poison-type';
      default:
        return '';
    }
  }
}
