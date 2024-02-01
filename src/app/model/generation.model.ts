export interface GenerationModel {
  id : number;
  pokemon_species: Pokemon_species[];
}

export interface Pokemon_species{
  name: string;
  url: string;
}
