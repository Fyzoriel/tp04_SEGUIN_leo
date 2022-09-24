import { Component, Input } from "@angular/core";
import { ClientDataType } from "../../types/client-data.type";

@Component({
  selector: "app-display-client-data",
  templateUrl: "./display-client-data.component.html",
  styleUrls: ["./display-client-data.component.css"]
})
export class DisplayClientDataComponent {
  @Input() clientData: ClientDataType | undefined;
}
