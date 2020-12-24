import {FormControl, Validators} from '@angular/forms';

// RegExp
export const REQUIRED_VALIDATOR = [Validators.required, noWhitespaceValidator];
export const EMAIL_REGEXP: RegExp = new RegExp (`
^(([^<>()[\\]\\\\.,;:\\s@"]
+(\\.[^<>()[\\]\\\\.,;:\\s@"]+)*)
|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])
|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$
`.replace(/\n/g, ''));


export const EMAIL_VALIDATOR = [
  Validators.required,
  noWhitespaceValidator,
  Validators.pattern(EMAIL_REGEXP)
];

// Function Validators
function noWhitespaceValidator(control: FormControl) {
  const isWhitespace = (control.value || '').trim().length === 0;
  const isValid = !isWhitespace;
  return isValid ? null : { whitespace: true };
}


