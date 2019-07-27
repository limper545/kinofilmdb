import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State as ItemState } from '../reducers/movie.reducer';

export const getItemState = createFeatureSelector<ItemState>('item');

export const getItemsLoading = createSelector(
  getItemState,
  state => state.loading
);

export const getAllItems = createSelector(
  getItemState,
  state => state.loading
);
