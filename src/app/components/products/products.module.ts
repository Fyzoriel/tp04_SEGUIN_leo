import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { DetailComponent } from "./detail/detail.component";
import { CartComponent } from "../user/cart/cart.component";
import { CatalogueComponent } from "./catalogue/catalogue.component";

const routes: Routes = [
  {
    path: "",
    component: CatalogueComponent
  },
  {
    path: ":id",
    component: DetailComponent
  },
  {
    path: "cart",
    component: CartComponent
  },
  {
    path: "**",
    redirectTo: "profile"
  }
];
@NgModule({
  declarations: [DetailComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class ProductsModule {}
