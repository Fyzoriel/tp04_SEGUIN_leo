import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { RegisterFormComponent } from "./componnents/user/register-form/register-form.component";
import { LoginFormComponent } from "./componnents/user/login-form/login-form.component";
import { ProfileComponent } from "./componnents/user/profile/profile.component";

import { CatalogueComponent } from "./componnents/catalogue/catalogue.component";

import { NegateAuthGuard } from "./guards/negateAuth.guard";
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  { path: "", component: CatalogueComponent },
  {
    path: "register",
    component: RegisterFormComponent,
    canActivate: [NegateAuthGuard]
  },
  {
    path: "login",
    component: LoginFormComponent,
    canActivate: [NegateAuthGuard]
  },
  { path: "profile", component: ProfileComponent, canActivate: [AuthGuard] },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
