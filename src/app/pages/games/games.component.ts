import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Game, PokemonInfo } from 'src/app/services/poke.interfaces';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit{
  
  games!: Game;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Game>('../../../assets/games.json').subscribe((data) => {
      this.games = data;
      console.log(this.games)
    });
  }
}
