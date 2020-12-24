import {Component, OnInit} from '@angular/core';
import {DivisionService} from '@api/division/division.service';
import {IDivisionModel} from '@api/division/res/division.interface';
import {ManageTypesEnum} from '@enums/manage-types.enum';
import {PermissionsEnum} from '@enums/permissions.enum';
import {select, Store} from '@ngrx/store';
import {DivisionHelperService} from '@pages/division/pages/division/services/division-helper.service';
import {deleteDivisionAction} from '@pages/division/pages/division/store/actions/division-delete.actions';
import {getDivisionListAction} from '@pages/division/pages/division/store/actions/division-list.actions';
import {divisionListSelector} from '@pages/division/pages/division/store/selectors/division.selectors';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  list$: Observable<IDivisionModel[]>;
  ManageTypesEnum = ManageTypesEnum;
  PermissionsEnum = PermissionsEnum;
  visibleNameFilter = false;
  visibleAddressFilter = false;

  constructor(
    public helperService: DivisionHelperService,
    private store: Store,
    public divisionService: DivisionService
  ) {
  }

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues() {
    this.store.dispatch(getDivisionListAction());
    this.list$ = this.store.pipe(select(divisionListSelector));
  }

  deleteDivision(id: string) {
    this.store.dispatch(deleteDivisionAction({id}));
  }
}
