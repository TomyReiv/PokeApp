import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeAPI, PokemonCaracts, PokemonInfo } from 'src/app/services/poke.interfaces';

@Component({
  selector: 'app-poke-id',
  templateUrl: './poke-id.component.html',
  styleUrls: ['./poke-id.component.css'],
})
export class PokeIdComponent implements OnInit {
  pokemonName!: string;
  pokemonImage!: string;
  pokemonMoves!: any[];
  pokemonType!: any[];
  pokeId!: number;
  pokemonId!: PokemonInfo;
  pokemonCar!: PokemonCaracts;
  descriptionES!: string;
  private urlPoke: string = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.http.get<PokemonCaracts>(`https://pokeapi.co/api/v2/characteristic/${id}/`)
      .subscribe((info) => {
        this.pokemonCar = info;
        this.setDescriptionES();
      });
      this.http
        .get<PokemonInfo>(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .subscribe((info) => {
          this.pokemonId = info;
          this.pokemonName = info.name!;
          this.pokemonType = info.types!;
          this.pokemonImage = info.sprites?.front_default;
          if(info.moves){
            this.pokemonMoves = info.moves!.slice(0, 30);
            console.log(this.pokemonMoves)
          }
        });
    });
    
  }
  setDescriptionES(): void {
    const descriptionsES = this.pokemonCar.descriptions.filter(desc => desc.language.name === 'es');
    this.descriptionES = descriptionsES.length > 0 ? descriptionsES[0].description : '';
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
