import { Component, HostBinding, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../../services/auth.service";
import { StorageService } from "../../../services/storage.service";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.css", "../styles.css"]
})
export class LoginFormComponent implements OnInit {
  @HostBinding("class.app_content_centered")
  public userDataForm!: FormGroup;

  public loginError: string | undefined;

  public constructor(
    private readonly router: Router,
    private readonly formBuilder: FormBuilder,
    private readonly authService: AuthService,
    private readonly storageService: StorageService
  ) {}

  public ngOnInit(): void {
    const minPassphraseLength = 8;

    this.userDataForm = this.formBuilder.group({
      email: [
        "",
        {
          validators: [Validators.required, Validators.email]
        }
      ],
      passphrase: [
        "",
        {
          validators: [
            Validators.required,
            Validators.minLength(minPassphraseLength)
          ]
        }
      ]
    });
  }

  public onSubmit = (): void => {
    if (!this.userDataForm.valid) {
      return;
    }

    const { email, passphrase } = this.userDataForm.value;

    this.authService.login(email, passphrase).subscribe({
      next: user => {
        this.loginError = undefined;

        this.storageService.saveUser(user.id);
        void this.router.navigate(["/"]);
      },
      error: () => {
        this.userDataForm.patchValue({
          passphrase: ""
        });
        this.userDataForm.markAsUntouched();
        this.userDataForm.markAsPristine();
        this.loginError = "Invalid credentials";
      }
    });
  };
}
