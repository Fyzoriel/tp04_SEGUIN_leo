import { Injectable } from "@angular/core";

import { APIUserType } from "../types/user.type";

@Injectable({
  providedIn: "root"
})
// TODO: Replace with JWT token and move to local storage
export class StorageService {
  // TODO: Replace by backend
  private readonly users: APIUserType[] = [];

  private currentUserId: number | undefined;

  // front-end
  public clearUser = (): void => {
    this.currentUserId = undefined;
    // localStorage.removeItem("user");
  };

  public saveUser = (userId: number): void => {
    this.currentUserId = userId;
    // localStorage.removeItem("user");
    // localStorage.setItem("user", JSON.stringify(user));
  };

  public getUser = (): number | null => {
    return this.currentUserId ?? null;
    // const user = localStorage.getItem("user");
  };

  public isLoggedIn = (): boolean => {
    return this.currentUserId !== undefined;
    // return !!localStorage.getItem("user");
  };

  // back-end
  public addUser = (user: APIUserType): void => {
    this.users.push(user);
  };
  public getAllUsers = (): APIUserType[] => {
    return this.users;
  };
  public getUserById = (id: number): APIUserType | undefined => {
    return this.users.find(user => user.id === id);
  };
}
