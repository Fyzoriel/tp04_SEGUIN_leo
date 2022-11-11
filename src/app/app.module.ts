import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterOutlet } from "@angular/router";

import { registerLocaleData } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import localeFr from "@angular/common/locales/fr";

import { NgSelectModule } from "@ng-select/ng-select";
import { NgxSliderModule } from "@angular-slider/ngx-slider";

import { AppRoutingModule } from "./app-routing.module";

import { ProductService } from "./services/product.service";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/shared/header/header.component";
import { FooterComponent } from "./components/shared/footer/footer.component";

import { RegisterFormComponent } from "./components/auth/register-form/register-form.component";
import { LoginFormComponent } from "./components/auth/login-form/login-form.component";
import { ProfileComponent } from "./components/user/profile/profile.component";

import { CatalogueComponent } from "./components/products/catalogue/catalogue.component";

import { DataControlDirective } from "./directives/data-control.directive";

import { PhonePipe } from "./pipes/phone/phone.pipe";

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    HeaderComponent,
    FooterComponent,
    DataControlDirective,
    PhonePipe,
    CatalogueComponent,
    LoginFormComponent,
    ProfileComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterOutlet,
    NgSelectModule,
    NgxSliderModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {}
