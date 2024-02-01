import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {GenerationService} from "../../services/generation.service";
import * as GenerationActions from "../action/generation.actions";
import {catchError, map, mergeMap, switchMap} from "rxjs";
import { Pokemon_species} from "../../model/generation.model";
import {PokemonService} from "../../services/pokemon.service";
import { PokemonModel } from "../../model/pokemon.model";
import * as PokemonActions from "../action/pokemon.actions";
import { EMPTY } from 'rxjs';
@Injectable()
export class generationEffects {
  constructor(private actions$: Actions, private generationService: GenerationService, private pokemonService: PokemonService) {
  }
  generation$ = createEffect(() => this.actions$.pipe(
    ofType(GenerationActions.getGeneration),
    // mergeMap((action) => this.generationService.getGenerationList(action.id)
    //   .pipe(
    //     map((generations: any) => GenerationActions.getGenerationSuccess({ pokemon_species: generations.pokemon_species as Pokemon_species[] })),
    //     mergeMap((generation) => {
         
    //       if (generation) {
    //         const names = generation.pokemon_species.map(species => species.name);
    //         return this.pokemonService.getPokemonByName(
    //           names[Math.floor(Math.random() * names.length)]
    //         ).pipe(
    //           map((pokemon: any) => PokemonActions.getPokemonSuccess({ pokemon: pokemon as PokemonModel })),
    //           catchError(error => [GenerationActions.getGenerationFailure({ error })])
    //         )
    //       } else {
    //         return EMPTY;
    //       }
    //     })
    // ))
    switchMap((action) => this.generationService.getGenerationList(action.id)
    .pipe(
    map((generation: any) => GenerationActions.getGenerationSuccess({
      pokemon_species: generation.pokemon_species 
    }
    )),
    catchError(error => [GenerationActions.getGenerationFailure({error})])
  )

)))
  
}
  




