import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ClientInputComponent } from "./client/components/client-input/client-input.component";
import { HeaderComponent } from "./core/components/header/header.component";
import { FooterComponent } from "./core/components/footer/footer.component";
import { DisplayClientDataComponent } from "./client/components/display-client-data/display-client-data.component";
import { DataControlDirective } from "./shared/directives/data-control.directive";
import { PhonePipe } from "./shared/phone/phone.pipe";

@NgModule({
  declarations: [
    AppComponent,
    ClientInputComponent,
    HeaderComponent,
    FooterComponent,
    DisplayClientDataComponent,
    DataControlDirective,
    PhonePipe
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
