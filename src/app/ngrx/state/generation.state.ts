import {PokemonModel} from "../../model/pokemon.model";
import {Pokemon_species} from "../../model/generation.model";

export interface GenerationState {
  pokemon_species: Pokemon_species[];
  loading: boolean;
  error: string;

}
