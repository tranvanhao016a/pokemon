import {PokemonState} from "../state/pokemon.state";
import {createReducer, on} from "@ngrx/store";
import {getPokemon, getPokemonDetail, getPokemonDetailFailure, getPokemonDetailSuccess, getPokemonFailure, getPokemonSuccess} from "../action/pokemon.actions";
import {PokemonModel} from "../../model/pokemon.model";
import { state } from "@angular/animations";

export const initializState: PokemonState = {
  pokemon: [],
  loading: false,
  error: '',
  pokemnDetail: {
    name: '',
    order: 0,
    sprites: {
      back_default: ''
    },
  },

}
export const pokemonReducer = createReducer(
  initializState,
  on(
    getPokemon,
    (state, { type, name }) => {
      console.log(type);
      return {
        ...state,
        loading: true,
      };
    }),
  on(getPokemonSuccess, (state,
  {pokemon, type}) =>
  {

    let pokemons = [
      ...state.pokemon,
      ...pokemon
    ]
    // console.log(pokemons)
    return {
      ...state,
      pokemon: pokemons,
      loading: false,
      error: ''
    }
  }
  ),
  on(getPokemonFailure, (state, {error}) => {
    return {
      ...state,
      loading: false,
      error: error
    }
  }),

  on(getPokemonDetail, (state, {name}) => {
    return {
      ...state,
      loading: true,
    }
  }),

  on(getPokemonDetailSuccess, (state, {pokemon}) => {

    return {
      ...state,
      pokemnDetail: pokemon,
      loading: false,
      error: ''
    }
  }),
  
  on(getPokemonDetailFailure, (state, {error}) => {
    return {
      ...state,
      loading: false,
      error: error
    }
  }),
);
