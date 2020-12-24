import {FormControl, FormGroup, Validators} from '@angular/forms';

export class ManageUsersModel {
  _id = new FormControl('');
  _company = new FormControl(null);
  _companyId = new FormControl('');
  _role = new FormControl(null);
  _roleId = new FormControl('', [Validators.required]);
  _emailAddress = new FormControl('', [Validators.required]);
  _password = new FormControl('');
  _confirmPassword = new FormControl('');
  _fullName = new FormControl('', [Validators.required]);
  _phoneNumber = new FormControl('', [Validators.required]);
  _permissions = new FormControl('');
  _permissionIds = new FormControl([]);

  formGroup = new FormGroup({
    companyId: this._companyId,
    roleId: this._roleId,
    emailAddress: this._emailAddress,
    password: this._password,
    confirmPassword: this._confirmPassword,
    fullName: this._fullName,
    phoneNumber: this._phoneNumber,
    permissionIds: this._permissionIds,
  });

  createModel() {
    return {
      companyId: this._companyId.value,
      roleId: this._roleId.value,
      emailAddress: this._emailAddress.value,
      password: this._password.value,
      confirmPassword: this._confirmPassword.value,
      fullName: this._fullName.value,
      phoneNumber: this._phoneNumber.value,
      permissionIds: this._permissionIds.value
    };
  }

  changeModel() {
    return {
      companyId: this._companyId.value,
      roleId: this._roleId.value,
      emailAddress: this._emailAddress.value,
      password: this._password.value,
      confirmPassword: this._confirmPassword.value,
      fullName: this._fullName.value,
      phoneNumber: this._phoneNumber.value,
      permissionIds: this._permissionIds.value,
    };
  }

  disableAllField() {
    this._companyId.disable();
    this._roleId.disable();
    this._emailAddress.disable();
    this._password.disable();
    this._confirmPassword.disable();
    this._fullName.disable();
    this._phoneNumber.disable();
    this._permissionIds.disable();
  }
}
