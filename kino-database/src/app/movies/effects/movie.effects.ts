import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import { LoadMoviesFailure, LoadMoviesSuccess, MovieActionTypes, MovieActions } from '../actions/movie.actions';




@Injectable()
export class MovieEffects {

  @Effect()
  loadMovies$ = this.actions$.pipe(
    ofType(MovieActionTypes.LoadMovies),
    concatMap(() =>
      /** An EMPTY observable only emits completion. Replace with your own observable API request */
      EMPTY.pipe(
        map(data => new LoadMoviesSuccess({ data })),
        catchError(error => of(new LoadMoviesFailure({ error }))))
    )
  );



  constructor(private actions$: Actions<MovieActions>) {}

}
