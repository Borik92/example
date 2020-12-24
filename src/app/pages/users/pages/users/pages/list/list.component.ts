import {Component, OnInit} from '@angular/core';
import {IUsersModel} from '@api/users/res/user.interface';
import {ManageTypesEnum} from '@enums/manage-types.enum';
import {select, Store} from '@ngrx/store';
import {UsersHelperService} from '@pages/users/pages/users/services/users-helper.service';
import {deleteUserAction} from '@pages/users/pages/users/store/actions/users-delete.actions';
import {getUsersListAction} from '@pages/users/pages/users/store/actions/users-list.actions';
import {usersListSelector} from '@pages/users/pages/users/store/selectors/users.selectors';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  list$: Observable<IUsersModel[]>;
  ManageTypesEnum = ManageTypesEnum;

  constructor(public helperService: UsersHelperService, private store: Store) {
  }

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues() {
    this.store.dispatch(getUsersListAction());
    this.list$ = this.store.pipe(select(usersListSelector));
  }

  deleteReturnedCodeRange(id: string) {
    this.store.dispatch(deleteUserAction({id}));
  }

}
