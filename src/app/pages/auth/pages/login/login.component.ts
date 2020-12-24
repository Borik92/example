import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '@api/auth/auth.service';
import {select, Store} from '@ngrx/store';
import {loginAction} from '../../store/actions/auth-login.actions';
import {Observable} from 'rxjs';
import {isSubmittingSelector} from '../../store/selectors/auth-login.selectors';
import {EMAIL_VALIDATOR, REQUIRED_VALIDATOR} from '@constants/form-validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  passwordVisible = false;
  isSubmitting$: Observable<boolean>;
  emailAddress = new FormControl('', EMAIL_VALIDATOR);
  password = new FormControl('', [...REQUIRED_VALIDATOR, Validators.minLength(6)]);
  validateForm = new FormGroup({
    emailAddress: this.emailAddress,
    password: this.password
  });

  constructor(private authService: AuthService, private store: Store) {
  }

  ngOnInit(): void {
    this.initializeValues();
  }

  login() {
    if (this.validateForm.valid) {
      this.emailAddress.setValue(this.emailAddress.value.trim());
      this.store.dispatch(loginAction(this.validateForm.value));
    }
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
  }
}
