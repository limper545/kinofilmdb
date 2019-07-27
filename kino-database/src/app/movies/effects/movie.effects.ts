import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, switchMap, tap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import { LoadItemsFailure, LoadItemsSuccess, ItemActions, ItemActionTypes } from '../actions/movie.actions';
// import { BookStoreService } from '../shared/book-store.service';

@Injectable()
export class BookEffects {

  @Effect()
  loadBooks$ = this.actions$.pipe(
    ofType(ItemActionTypes.LoadItem),
    tap(item => console.log('Funzt das so?'))
  );

  constructor(private actions$: Actions<ItemActions>) {}
}
