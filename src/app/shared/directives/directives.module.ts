import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {PermissionCheckerDirective} from './permission-checker.directive';

@NgModule({
  declarations: [PermissionCheckerDirective],
  exports: [
    PermissionCheckerDirective
  ],
  imports: [
    CommonModule,
  ]
})
export class DirectivesModule {
}
