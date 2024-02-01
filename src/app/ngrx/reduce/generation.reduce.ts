import {GenerationState} from "../state/generation.state";
import {createReducer, on} from "@ngrx/store";
import {getGeneration, getGenerationFailure, getGenerationSuccess} from "../action/generation.actions";
import {Pokemon_species} from "../../model/generation.model";

export const initializState: GenerationState = {
  pokemon_species: [],
  loading: false,
  error: ''
};

export const generationReducer = createReducer(
  initializState,
  on(getGeneration, state => ({...state, loading: true})),
  on(getGenerationSuccess, (state,
                           {pokemon_species}) =>
    ({...state, pokemon_species, loading: false})),
  on(getGenerationFailure, (state, {error}) => ({...state, error: error, loading: false}))
);
