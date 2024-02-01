import {PokemonState} from "../state/pokemon.state";
import {createReducer, on} from "@ngrx/store";
import {getPokemon, getPokemonFailure, getPokemonSuccess} from "../action/pokemon.actions";
import {PokemonModel} from "../../model/pokemon.model";

export const initializState: PokemonState = {
  pokemon: <PokemonModel>{},
  loading: false,
  error: ''
}
export const pokemonReducer = createReducer(
  initializState,
  on(getPokemon, state => ({...state, loading: true})),
  on(getPokemonSuccess, (state, {pokemon}) => ({...state, pokemon: pokemon, loading: false})),
  on(getPokemonFailure, (state, {error}) => ({...state, error: error, loading: false}))
);
