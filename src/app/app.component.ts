import { Component } from "@angular/core";
import { ClientDataType } from "./shared/types/client-data.type";
import { FormResultType } from "./shared/types/form.type";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public clientFormData: FormResultType<ClientDataType>;

  constructor() {
    this.clientFormData = {
      submitted: false
    };
  }

  onClientDataChangeEvent(event: FormResultType<ClientDataType>) {
    this.clientFormData = event;
  }
}
