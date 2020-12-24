import {Component, OnInit} from '@angular/core';
import {PermissionsEnum} from '@enums/permissions.enum';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {UserRegionsHelperService} from '../../services/user-regions-helper.service';
import {IUserRegionsModel} from '@api/user-regions/res/user-regions.interface';
import {getUserRegionsListAction} from '../../store/actions/user-regions-list.actions';
import {userRegionsListSelector} from '../../store/selectors/user-regions.selectors';
import {ManageTypesEnum} from '@enums/manage-types.enum';
import {deleteUserRegionAction} from '../../store/actions/user-regions-delete.actions';

@Component({
  selector: 'app-user-regions-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  list$: Observable<IUserRegionsModel[]>;
  ManageTypesEnum = ManageTypesEnum;
  PermissionsEnum = PermissionsEnum;

  idValue = '';
  nameValue = '';

  constructor(public helperService: UserRegionsHelperService, private store: Store) {
  }

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues(): void {
    this.getList();
    this.list$ = this.store.pipe(select(userRegionsListSelector));
  }

  getList() {
    this.store.dispatch(getUserRegionsListAction({idValue: this.idValue, nameValue: this.nameValue}));
  }

  deleteUserRegion(id: string) {
    this.store.dispatch(deleteUserRegionAction({id}));
  }

  search(inputValue) {
  }

  reset(input: HTMLInputElement) {

  }

  resetAllFilters() {

  }
}
