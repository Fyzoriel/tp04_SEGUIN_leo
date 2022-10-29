import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import { environment } from "src/environments/environment";
import { ProductType } from "../types/product.type";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  env = environment;

  public constructor(private readonly httpClient: HttpClient) {}

  public get = (): Observable<ProductType[]> => {
    return this.httpClient.get<ProductType[]>(this.env.products);
  };
}
