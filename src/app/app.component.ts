import { Component } from "@angular/core";
import { ClientDataType } from "../types/client-data.type";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public title = "tp02_SEGUIN_leo";
  public clientData: ClientDataType = {};

  onClientDataChange(event: ClientDataType) {
    this.clientData = event;
  }
}
