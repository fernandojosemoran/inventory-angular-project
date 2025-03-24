import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  providers: [
    provideHttpClient()
  ]
})
export class ProductsModule { }
