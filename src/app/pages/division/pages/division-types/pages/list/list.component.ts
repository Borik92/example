import {Component, OnInit} from '@angular/core';
import {DivisionTypesService} from '@api/division-types/division-types.service';
import {IDivisionTypeModel} from '@api/division-types/res/division-type.interface';
import {ManageTypesEnum} from '@enums/manage-types.enum';
import {PermissionsEnum} from '@enums/permissions.enum';
import {select, Store} from '@ngrx/store';
import {DivisionTypesHelperService} from '@pages/division/pages/division-types/services/division-types-helper.service';
import {deleteDivisionTypeAction} from '@pages/division/pages/division-types/store/actions/division-types-delete.actions';
import {getDivisionTypesListAction} from '@pages/division/pages/division-types/store/actions/division-types-list.actions';
import {divisionTypesListSelector} from '@pages/division/pages/division-types/store/selectors/division-types.selectors';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  list$: Observable<IDivisionTypeModel[]>;
  ManageTypesEnum = ManageTypesEnum;
  PermissionsEnum = PermissionsEnum;
  visibleNameFilter = false;
  visibleDescriptionFilter = false;
  visibleIdentifierFilter = false;

  constructor(
    public helperService: DivisionTypesHelperService,
    private store: Store,
    public divisionTypesService: DivisionTypesService
  ) {
  }

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues() {
    this.store.dispatch(getDivisionTypesListAction());
    this.list$ = this.store.pipe(select(divisionTypesListSelector));
  }
}
