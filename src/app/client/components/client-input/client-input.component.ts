import { Component, EventEmitter, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { ClientDataType } from "../../../shared/types/client-data.type";
import { CustomValidators } from "../../../shared/CustomValidators";
import { FormResultType } from "../../../shared/types/form.type";

@Component({
  selector: "app-client-input",
  templateUrl: "./client-input.component.html",
  styleUrls: ["./client-input.component.css"]
})
export class ClientInputComponent {
  @Output() public newClientDataEvent = new EventEmitter<
    FormResultType<ClientDataType>
  >();

  public clientDataForm: FormGroup;

  constructor(private readonly fb: FormBuilder) {
    const minPassphraseLength = 8;

    this.clientDataForm = this.fb.group({
      firstName: [
        "",
        {
          validators: Validators.required,
          updateOn: "blur"
        }
      ],
      name: [
        "",
        {
          validators: Validators.required,
          updateOn: "blur"
        }
      ],

      email: [
        "",
        {
          validators: [Validators.required, Validators.email],
          updateOn: "blur"
        }
      ],
      phone: [
        "",
        {
          validators: [
            Validators.required,
            Validators.pattern(
              "(0|\\+33 ?)[1-9]([-. ]?[0-9]{2} ?){3}([-. ]?[0-9]{2})"
            )
          ],
          updateOn: "blur"
        }
      ],
      address: ["", Validators.required],
      passphrase: [
        "",
        {
          validators: [
            Validators.required,
            Validators.minLength(minPassphraseLength),
            CustomValidators.mustMatch("confirmPassphrase", true)
          ],
          updateOn: "blur"
        }
      ],
      confirmPassphrase: [
        "",
        {
          validators: [
            Validators.required,
            Validators.minLength(minPassphraseLength),
            CustomValidators.mustMatch("passphrase")
          ],
          updateOn: "blur"
        }
      ]
    });
  }

  onSubmit = () => {
    if (!this.clientDataForm.valid) {
      return;
    }

    this.newClientDataEvent.emit({
      submitted: true,
      data: this.clientDataForm.value
    });
  };
}
