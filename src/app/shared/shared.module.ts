import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PipesModule} from '@pipes/pipes.module';
import {DirectivesModule} from '@directives/directives.module';
import {
  NzBreadCrumbModule,
  NzButtonModule,
  NzCheckboxModule, NzDatePickerModule, NzDescriptionsModule, NzDropDownModule,
  NzFormModule,
  NzGridModule,
  NzIconModule,
  NzInputModule, NzMessageModule, NzModalModule, NzPageHeaderModule, NzPopconfirmModule, NzPopoverModule, NzRadioModule, NzSelectModule,
  NzTableModule, NzTagModule, NzToolTipModule, NzTypographyModule, NzUploadModule
} from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NzResultModule} from 'ng-zorro-antd/result';
import {IconsProviderModule} from '../icons-provider.module';
import {TagTypesComponent} from '@components/tag-types/tag-types.component';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

@NgModule({
  declarations: [
    TagTypesComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    PipesModule,
    DirectivesModule,
    NzGridModule,
    NzInputModule,
    NzIconModule,
    ReactiveFormsModule,
    NzFormModule,
    NzButtonModule,
    NzCheckboxModule,
    NzLayoutModule,
    NzMenuModule,
    NzBreadCrumbModule,
    NzTableModule,
    NzTagModule,
    NzDropDownModule,
    NzPageHeaderModule,
    NzMessageModule,
    NzUploadModule,
    IconsProviderModule,
    NzUploadModule,
    NzModalModule,
    NzIconModule,
    NzGridModule,
    NzRadioModule,
    NzDatePickerModule,
    NzSelectModule,
    NzAutocompleteModule,
    NzToolTipModule,
    NzPopoverModule,
    NzAvatarModule,
    NzTypographyModule,
    NzPopconfirmModule,
    NzDescriptionsModule,
    NzResultModule,
  ],
  exports: [
    FormsModule,
    PipesModule,
    DirectivesModule,
    NzGridModule,
    NzInputModule,
    NzIconModule,
    ReactiveFormsModule,
    NzFormModule,
    NzButtonModule,
    NzCheckboxModule,
    NzLayoutModule,
    NzMenuModule,
    NzBreadCrumbModule,
    NzTableModule,
    NzTagModule,
    NzDropDownModule,
    NzPageHeaderModule,
    NzMessageModule,
    NzUploadModule,
    IconsProviderModule,
    TagTypesComponent,
    NzUploadModule,
    NzModalModule,
    NzIconModule,
    NzGridModule,
    NzRadioModule,
    NzDatePickerModule,
    NzSelectModule,
    NzAutocompleteModule,
    NzToolTipModule,
    NzPopoverModule,
    NzAvatarModule,
    NzTypographyModule,
    NzPopconfirmModule,
    NzDescriptionsModule,
    NzResultModule,
  ]
})
export class SharedModule {
}
