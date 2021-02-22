import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SamplesRoutingModule } from './samples-routing.module';
import { ParentToChildCommunicationComponent } from './parent-to-child-communication/parent-to-child-communication.component';
import { FormsModule } from '@angular/forms';
import { ProductItemComponent } from './product-item/product-item.component';
import { DemoPageComponent } from './demo-page/demo-page.component';

@NgModule({
  declarations: [ParentToChildCommunicationComponent, ProductItemComponent, DemoPageComponent],
  imports: [
    CommonModule,
    SamplesRoutingModule,
    FormsModule
  ]

})
export class SamplesModule { }
