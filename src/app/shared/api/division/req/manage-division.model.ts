import {FormControl, FormGroup, Validators} from '@angular/forms';

export class ManageDivisionModel {
  id = new FormControl('');
  identifier = new FormControl('', [Validators.required]);
  name = new FormControl('', [Validators.required]);
  divisionTypeId = new FormControl('', [Validators.required]);
  divisionType = new FormControl('');
  address = new FormControl('', [Validators.required]);
  phone = new FormControl('', [Validators.required]);
  contactPerson = new FormControl('', [Validators.required]);

  formGroup = new FormGroup({
    identifier: this.identifier,
    name: this.name,
    divisionTypeId: this.divisionTypeId,
    address: this.address,
    phone: this.phone,
    contactPerson: this.contactPerson,
  });

  createModel() {
    return {
      name: this.name.value,
      divisionTypeId: this.divisionTypeId.value,
      identifier: this.identifier.value,
      address: this.address.value,
      phone: this.phone.value,
      contactPerson: this.contactPerson.value,
    };
  }

  changeModel() {
    return {
      name: this.name.value,
      divisionTypeId: this.divisionTypeId.value,
      identifier: this.identifier.value,
      address: this.address.value,
      phone: this.phone.value,
      contactPerson: this.contactPerson.value,
    };
  }

  disableAllField() {
    this.divisionTypeId.disable();
    this.identifier.disable();
    this.name.disable();
    this.address.disable();
    this.phone.disable();
    this.contactPerson.disable();
  }
}
