import {Component, Input, OnInit} from '@angular/core';
import {StatusTypesEnum} from '../../enums/status-types.enum';

@Component({
  selector: 'app-tag-types',
  templateUrl: './tag-types.component.html',
  styleUrls: ['./tag-types.component.scss']
})
export class TagTypesComponent implements OnInit {

  @Input() type: StatusTypesEnum = StatusTypesEnum.Shipped;
  OrdersStatusTypesEnum = StatusTypesEnum;

  constructor() {
  }

  ngOnInit(): void {
  }
}
