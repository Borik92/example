import {FormControl, FormGroup} from '@angular/forms';
import {REQUIRED_VALIDATOR} from '@constants/form-validators';

export class ManageCompanyModel {
  id = new FormControl('');
  name = new FormControl('', REQUIRED_VALIDATOR);
  address = new FormControl('', REQUIRED_VALIDATOR);
  identifier = new FormControl('', REQUIRED_VALIDATOR);
  division = new FormControl('');
  divisionId = new FormControl('', REQUIRED_VALIDATOR);

  formGroup = new FormGroup({
    id: this.id,
    name: this.name,
    address: this.address,
    identifier: this.identifier,
    divisionId: this.divisionId,
  });

  createModel() {
    return {
      name: this.name.value,
      address: this.address.value,
      identifier: this.identifier.value,
      divisionId: this.divisionId.value,
    };
  }

  changeModel() {
    return {
      name: this.name.value,
      address: this.address.value,
      identifier: this.identifier.value,
      divisionId: this.divisionId.value,
    };
  }

  disableAllField() {
    this.id.disable();
    this.name.disable();
    this.address.disable();
    this.identifier.disable();
    this.divisionId.disable();
  }
}
