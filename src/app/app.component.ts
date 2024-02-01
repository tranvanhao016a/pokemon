import { Component } from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {HttpClientModule} from "@angular/common/http";
import {Store} from "@ngrx/store";
import {GenerationState} from "./ngrx/state/generation.state";
import {PokemonState} from "./ngrx/state/pokemon.state";
import {getGeneration} from "./ngrx/action/generation.actions";
import {AsyncPipe} from "@angular/common";
import {getPokemon} from "./ngrx/action/pokemon.actions";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, HttpClientModule, AsyncPipe, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pokemon';
  $loading = this.store.select(state => state.generation.loading);
  $generation = this.store.select(state => state.generation.pokemon_species);
  $error = this.store.select(state => state.generation.error);
  $pokemon = this.store.select(state => state.pokemon.pokemon);


  constructor(private store:Store<{
    generation: GenerationState,
    pokemon: PokemonState,
  }>,
              private router: Router

  ) {

    this.store.dispatch(getGeneration(
      {id: 1}
    ));
  }
  getPokemonByName(name:string){
    this.router.navigate(['home/detail', name]);
  }

}
