import { CommonModule } from "@angular/common";
import { provideHttpClient } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ProductsRoutingModule } from "./products-routing.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, ProductsRoutingModule],
  providers: [provideHttpClient()],
})
export class ProductsModule {}
