import { Component, EventEmitter, Input, Output } from "@angular/core";

import { ClientDataType } from "../../../shared/types/client-data.type";
import { FormResultType } from "../../../shared/types/form.type";

@Component({
  selector: "app-display-client-data",
  templateUrl: "./display-client-data.component.html",
  styleUrls: ["./display-client-data.component.css"]
})
export class DisplayClientDataComponent {
  @Input() clientData: ClientDataType | undefined;
  @Output() public newClientDataEvent = new EventEmitter<
    FormResultType<ClientDataType>
  >();

  onClick = () => {
    this.newClientDataEvent.emit({
      submitted: false,
      data: this.clientData
    });
  };
}
