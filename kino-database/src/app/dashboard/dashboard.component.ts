import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { LoadItems } from '../movies/actions/movie.actions';
import { getItemsLoading, getAllItems } from '../movies/selectors/item.selector';
export interface Item {
  name: string;
  nachname: string;
}

@Component({
  selector: 'km-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  items: Item[];

  loading$ = this.store.pipe(select(getItemsLoading));
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.items = [
      {
        name: 'Sascha',
        nachname: 'Vey'
      },
      {
        name: 'Amina',
        nachname: 'Diehl'
      }
    ];
  }

}
