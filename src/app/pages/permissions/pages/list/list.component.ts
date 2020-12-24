import {Component, OnInit} from '@angular/core';
import {IPermissionsModel} from '@api/permissions/res/permissions.interface';
import {ManageTypesEnum} from '@enums/manage-types.enum';
import {select, Store} from '@ngrx/store';
import {PermissionsHelperService} from '@pages/permissions/services/permissions-helper.service';
import {getPermissionsListAction} from '@pages/permissions/store/actions/permissions-list.actions';
import {permissionsListSelector} from '@pages/permissions/store/selectors/permissions.selectors';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {


  list$: Observable<IPermissionsModel[]>;
  ManageTypesEnum = ManageTypesEnum;

  constructor(public helperService: PermissionsHelperService, private store: Store) {
  }

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues() {
    this.store.dispatch(getPermissionsListAction());
    this.list$ = this.store.pipe(select(permissionsListSelector));
  }
}
