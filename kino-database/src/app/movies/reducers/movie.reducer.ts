
import { ItemActions, ItemActionTypes } from '../actions/movie.actions';
import { Item } from 'src/app/dashboard/dashboard.component';

export interface State {
  item: Item[];
  loading: boolean;
}

export const initialState: State = {
  item: [],
  loading: false
};

export function reducer(state = initialState, action: ItemActions): State {
  switch (action.type) {

    case ItemActionTypes.LoadItem:
      return state;

    case ItemActionTypes.LoadItemSuccess:
      return state;

    case ItemActionTypes.LoadItemFailure:
      return state;

    default:
      return state;
  }
}
