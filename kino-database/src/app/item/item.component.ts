import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../dashboard/dashboard.component';

@Component({
  selector: 'km-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item: Item;
  constructor() { }

  ngOnInit() {
  }

}
