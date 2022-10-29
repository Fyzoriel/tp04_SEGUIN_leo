import { Component, OnInit } from "@angular/core";

import {
  debounceTime,
  distinctUntilChanged,
  map,
  Observable,
  Subject
} from "rxjs";

import { ProductService } from "../../services/product.service";
import { ProductType } from "../../types/product.type";

@Component({
  selector: "app-catalogue",
  templateUrl: "./catalogue.component.html",
  styleUrls: ["./catalogue.component.css"]
})
export class CatalogueComponent implements OnInit {
  public products$!: Observable<ProductType[]>;
  public nameFilterChanged$ = new Subject<string>();

  public nameFilter: string = "";
  private readonly minPriceFilter: number | undefined;
  private readonly maxPriceFilter: number | undefined;

  public constructor(private readonly productService: ProductService) {
    const debounceTimeMs = 300;
    this.nameFilterChanged$
      .pipe(debounceTime(debounceTimeMs), distinctUntilChanged())
      .subscribe(() => {
        this.fetchProducts();
      });
  }

  public ngOnInit(): void {
    this.products$ = this.productService.get();
  }

  public filterProduct = (product: ProductType) => {
    return (
      product.name.toLowerCase().includes(this.nameFilter.toLowerCase()) &&
      (this.minPriceFilter === undefined ||
        product.price >= this.minPriceFilter) &&
      (this.maxPriceFilter === undefined ||
        product.price <= this.maxPriceFilter)
    );
  };

  public fetchProducts = () => {
    this.products$ = this.productService.get().pipe(
      map(products => {
        return products.filter(this.filterProduct);
      })
    );
  };
}
