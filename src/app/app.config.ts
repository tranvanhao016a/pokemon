import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import {generationReducer} from "./ngrx/reduce/generation.reduce";
import {pokemonReducer} from "./ngrx/reduce/pokemon.reduce";
import {generationEffects} from "./ngrx/effect/generation.effects";
import {pokemonEffects} from "./ngrx/effect/pokemon.effects";
import {provideHttpClient} from "@angular/common/http";
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideStore(
    {
      generation: generationReducer,
      pokemon: pokemonReducer,
    }
  ), provideEffects(
    [
      generationEffects,
      pokemonEffects
    ]
  ),
    provideHttpClient()
  ]
};
