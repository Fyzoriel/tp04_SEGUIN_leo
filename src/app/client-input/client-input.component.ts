import { Component, EventEmitter, Output } from "@angular/core";
import { ClientDataType } from "../../types/client-data.type";

@Component({
  selector: "app-client-input",
  templateUrl: "./client-input.component.html",
  styleUrls: ["./client-input.component.css"]
})
export class ClientInputComponent {
  @Output() newClientDataEvent = new EventEmitter<ClientDataType>();

  public data: ClientDataType = {};
  public isDataValid: boolean = false;

  onChange() {
    const { firstName, name, email, phone, address } = this.data;

    this.isDataValid = !(!firstName || !name || !email || !phone || !address);
  }

  onClick() {
    console.log("ClientInputComponent.onClick()");
    this.newClientDataEvent.emit(this.data);
  }
}
