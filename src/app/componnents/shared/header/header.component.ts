import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { StorageService } from "../../../services/storage.service";
import { AuthService } from "../../../services/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent {
  public constructor(
    private readonly router: Router,
    public readonly storageService: StorageService,
    private readonly authService: AuthService
  ) {}

  public logout = ($event: MouseEvent) => {
    $event.preventDefault();
    this.authService.logout();
    void this.router.navigate(["/"]);
  };
}
