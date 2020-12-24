import {FormControl, FormGroup, Validators} from '@angular/forms';

export class ManageDivisionTypeModel {
  _id = new FormControl('');
  _name = new FormControl('', [Validators.required]);
  _description = new FormControl('', [Validators.required]);
  _identifier = new FormControl('', [Validators.required]);

  formGroup = new FormGroup({
    name: this._name,
    description: this._description,
    identifier: this._identifier
  });

  createModel() {
    return {
      name: this._name.value,
      description: this._description.value,
      identifier: this._identifier.value,
    };
  }

  changeModel() {
    return {
      name: this._name.value,
      description: this._description.value,
      identifier: this._identifier.value,
    };
  }

  disableAllField() {
    this._name.disable();
    this._identifier.disable();
    this._description.disable();
  }
}
