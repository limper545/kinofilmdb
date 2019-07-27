import { Action } from '@ngrx/store';
import { Item } from '../../dashboard/dashboard.component';
import { HttpErrorResponse } from '@angular/common/http';

export enum ItemActionTypes {
  LoadItem = '[Item] Load Items',
  LoadItemSuccess = '[Item] Load Items Success',
  LoadItemFailure = '[Item] Load Items Failure',
}

export class LoadItems implements Action {
  readonly type = ItemActionTypes.LoadItem;
}

export class LoadItemsSuccess implements Action {
  readonly type = ItemActionTypes.LoadItemSuccess;
  constructor(public payload: { data: Item[] }) { }
}

export class LoadItemsFailure implements Action {
  readonly type = ItemActionTypes.LoadItemFailure;
  constructor(public payload: { error: HttpErrorResponse }) { }
}

export type ItemActions =
  | LoadItems
  | LoadItemsSuccess
  | LoadItemsFailure;
