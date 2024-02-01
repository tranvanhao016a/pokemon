import {createAction, props} from "@ngrx/store";
import {PokemonModel} from "../../model/pokemon.model";

export const getPokemon=createAction(
  '[Pokemon] Get Pokemon',
  props<{ name: string }>()
);
export const getPokemonSuccess=createAction(
  '[Pokemon] Get Pokemon Success',
    props<{ pokemon: PokemonModel }>()
);

export const getPokemonFailure=createAction(
  '[Pokemon] Get Pokemon Failure',
  props<{ error: string }>()
);

