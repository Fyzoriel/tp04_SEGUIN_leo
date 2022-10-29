import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { APIUserType, UserRegisterType } from "../types/user.type";
import { StorageService } from "./storage.service";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  public constructor(private readonly storageService: StorageService) {}

  public register = (user: UserRegisterType): Observable<any> => {
    const users = this.storageService.getAllUsers();

    if (users.find(u => u.email === user.email)) {
      return new Observable(observer => {
        observer.error("User already exists");
      });
    }

    this.storageService.addUser({
      id: users.length + 1,
      ...user
    });

    return new Observable(observer => {
      observer.next();
    });
  };

  public login = (
    email: string,
    passphrase: string
  ): Observable<APIUserType> => {
    const users = this.storageService.getAllUsers();

    const user = users.find(user => user.email === email);

    if (!user || user.passphrase !== passphrase) {
      return new Observable(observer => {
        observer.error("Invalid credentials");
      });
    }

    return new Observable(observer => {
      observer.next(user);
    });
  };

  public logout = (): Observable<any> => {
    this.storageService.clearUser();

    return new Observable(observer => {
      observer.next();
    });
  };
}
