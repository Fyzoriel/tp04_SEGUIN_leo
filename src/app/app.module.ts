import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { registerLocaleData } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import localeFr from "@angular/common/locales/fr";
import { RouterOutlet } from "@angular/router";

import { AppRoutingModule } from "./app-routing.module";

import { ProductService } from "./services/product.service";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./componnents/shared/header/header.component";
import { FooterComponent } from "./componnents/shared/footer/footer.component";

import { RegisterFormComponent } from "./componnents/user/register-form/register-form.component";
import { LoginFormComponent } from "./componnents/user/login-form/login-form.component";
import { ProfileComponent } from "./componnents/user/profile/profile.component";

import { CatalogueComponent } from "./componnents/catalogue/catalogue.component";

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
    RouterOutlet
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {}
