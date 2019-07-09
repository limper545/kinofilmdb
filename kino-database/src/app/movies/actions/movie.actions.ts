import { Action } from '@ngrx/store';

export enum MovieActionTypes {
  LoadMovies = '[Movie] Load Movies',
  LoadMoviesSuccess = '[Movie] Load Movies Success',
  LoadMoviesFailure = '[Movie] Load Movies Failure',
}

export class LoadMovies implements Action {
  readonly type = MovieActionTypes.LoadMovies;
}

export class LoadMoviesSuccess implements Action {
  readonly type = MovieActionTypes.LoadMoviesSuccess;
  constructor(public payload: { data: any }) { }
}

export class LoadMoviesFailure implements Action {
  readonly type = MovieActionTypes.LoadMoviesFailure;
  constructor(public payload: { error: any }) { }
}

export type MovieActions = LoadMovies | LoadMoviesSuccess | LoadMoviesFailure;

