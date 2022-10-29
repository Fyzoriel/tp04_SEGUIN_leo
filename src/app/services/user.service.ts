import { Injectable } from "@angular/core";

import { Observable } from "rxjs";

import { UserBaseType } from "../types/user.type";
import { StorageService } from "./storage.service";

@Injectable({
  providedIn: "root"
})
export class UserService {
  public constructor(private readonly storageService: StorageService) {}

  public getInformation = (): Observable<UserBaseType> => {
    const userId = this.storageService.getUser();

    if (userId === null) {
      return new Observable(observer => {
        observer.error("User not found");
      });
    }

    const user = this.storageService.getUserById(userId);
    return new Observable(observer => {
      observer.next(user);
    });
  };
}
