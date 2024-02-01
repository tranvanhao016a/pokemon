import {createAction, props} from "@ngrx/store";
import {Pokemon_species} from "../../model/generation.model";

export const getGeneration = createAction(
  '[Generation] Get Generation',
  props<{ id: number }>()
);
export const getGenerationSuccess = createAction(
  '[Generation] Get Generation Success',
  props<{ pokemon_species: Pokemon_species[] }>()

);
export const getGenerationFailure = createAction(
  '[Generation] Get Generation Failure',
  props<{ error: string }>()
);
