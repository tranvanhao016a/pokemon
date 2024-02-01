import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {GenerationService} from "../../services/generation.service";
import * as GenerationActions from "../action/generation.actions";
import {catchError, map, mergeMap, switchMap} from "rxjs";
import {GenerationModel, Pokemon_species} from "../../model/generation.model";
import {PokemonService} from "../../services/pokemon.service";
import {PokemonModel} from "../../model/pokemon.model";
@Injectable()
export class generationEffects {
  constructor(private actions$: Actions, private generationService: GenerationService,private pokemonService: PokemonService) {
  }
generation$ = createEffect(() => this.actions$.pipe(

  ofType(GenerationActions.getGeneration),
  mergeMap((action) => this.generationService.getGenerationList(action.id)
  .pipe(
   mergeMap((generation)=>{
     if(generation){
       return this.pokemonService.getPokemonByName(generation.pokemon_species[0].name).pipe(
          map((pokemon: any) => GenerationActions.getGenerationSuccess({pokemon: pokemon as PokemonModel})),
          catchError(error => [GenerationActions.getGenerationFailure({error})])
        )
       )
     }
   })
  )

)))

}



