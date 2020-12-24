import {FormControl, FormGroup, Validators} from '@angular/forms';

export class ManageRoleModel {
  _id = new FormControl('', [Validators.required]);
  _name = new FormControl('', [Validators.required]);
  _description = new FormControl('', [Validators.required]);
  _permissions = new FormControl('', [Validators.required]);
  _permissionIds = new FormControl([], [Validators.required]);

  formGroup = new FormGroup({
    name: this._name,
    description: this._description,
    permissionIds: this._permissionIds,
  });

  createModel() {
    return {
      name: this._name.value,
      description: this._description.value,
      permissionIds: this._permissionIds.value,
    };
  }

  changeModel() {
    return {
      name: this._name.value,
      description: this._description.value,
      permissionIds: this._permissionIds.value,
    };
  }

  disableAllField() {
    this._name.disable();
    this._description.disable();
    this._permissionIds.disable();
  }
}
