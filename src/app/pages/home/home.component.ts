import { Component, Input } from '@angular/core';
import {Store} from "@ngrx/store";
import {PokemonState} from "../../ngrx/state/pokemon.state";
import {getPokemon} from "../../ngrx/action/pokemon.actions";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = 'untitled';
  constructor(private store:Store<{ pokemon:PokemonState }>,private activeRouter:ActivatedRoute) {

    let name=this.activeRouter.snapshot.params['name'];

    this.pokemon =  this.store.dispatch(
      getPokemon({name: name}));
    console.log(this.pokemon)
  }
  pokemon:any;
}
