import {Component, OnInit} from '@angular/core';
import {IRolesModel} from '@api/roles/res/roles.interface';
import {ManageTypesEnum} from '@enums/manage-types.enum';
import {PermissionsEnum} from '@enums/permissions.enum';
import {select, Store} from '@ngrx/store';
import {RolesHelperService} from '@pages/users/pages/roles/services/roles-helper.service';
import {deleteRolesAction} from '@pages/users/pages/roles/store/actions/roles-delete.actions';
import {getRolesListAction} from '@pages/users/pages/roles/store/actions/roles-lists.actions';
import {rolesListSelector} from '@pages/users/pages/roles/store/selectors/roles.selectors';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  list$: Observable<IRolesModel[]>;
  ManageTypesEnum = ManageTypesEnum;
  PermissionsEnum = PermissionsEnum;

  constructor(public helperService: RolesHelperService, private store: Store) {
  }

  ngOnInit(): void {
    this.initializeValues();
  }

  search(value: string) {

  }

  reset(input: HTMLInputElement) {

  }

  resetAllFilters() {

  }

  initializeValues() {
    this.store.dispatch(getRolesListAction());
    this.list$ = this.store.pipe(select(rolesListSelector));
  };

  deleteReturnedCodeRange(id: string) {
    this.store.dispatch(deleteRolesAction({id}));
  }
}
