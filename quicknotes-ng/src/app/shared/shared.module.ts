import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorModule } from './vendor/vendor.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    VendorModule
  ],
  exports: [VendorModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppSharedModule { }
