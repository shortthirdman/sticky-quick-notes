import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  InputTextModule,
  InputTextareaModule,
  ButtonModule,
  DialogModule,
  ToastModule,
  CardModule,
  CheckboxModule,
  ConfirmationService,
  SelectButtonModule,
  ScrollPanelModule,
  MessageService,
  AutoCompleteModule
} from 'primeng';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    DialogModule,
    ToastModule,
    CardModule,
    CheckboxModule,
    ScrollPanelModule,
    SelectButtonModule,
    AutoCompleteModule
  ],
  providers: [ConfirmationService, MessageService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VendorModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: VendorModule,
      providers: [
      ]
    };
  }
}
