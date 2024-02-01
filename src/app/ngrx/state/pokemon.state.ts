import {PokemonModel} from "../../model/pokemon.model";

export interface PokemonState {
  pokemon: PokemonModel[];
  loading: boolean;
  error: string;
  pokemnDetail: PokemonModel;
  
}
