import {FormControl, FormGroup, Validators} from '@angular/forms';

export class ManageUserRegionModel {
  _id = new FormControl('', [Validators.required]);
  _name = new FormControl('', [Validators.required]);
  _description = new FormControl('', [Validators.required]);

  formGroup = new FormGroup({
    name: this._name,
    description: this._description
  });

  get name(): string {
    return this._name.value;
  }

  set name(value: string) {
    this._name.setValue(value);
  }

  get description(): string {
    return this._description.value;
  }

  set description(value: string) {
    this._description.setValue(value);
  }

  createModel() {
    return {
      name: this._name.value,
      description: this._description.value,
    };
  }

  changeModel() {
    return {
      name: this._name.value,
      description: this._description.value,
    };
  }

  disableAllField() {
    this._name.disable();
    this._description.disable();
  }
}
