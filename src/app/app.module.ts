import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterOutlet } from "@angular/router";
import { NgxsModule } from "@ngxs/store";

import { registerLocaleData } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import localeFr from "@angular/common/locales/fr";

import { AppRoutingModule } from "./app-routing.module";

import { ProductService } from "./services/product.service";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/shared/header/header.component";
import { FooterComponent } from "./components/shared/footer/footer.component";

import { DataControlDirective } from "./directives/data-control.directive";

import { CartState } from "./states/cart.state";

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DataControlDirective
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    RouterOutlet,
    NgxsModule.forRoot([CartState])
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {}
