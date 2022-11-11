import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";

import { CartStateModel } from "./cart.state.model";
import { ProductType } from "../types/product.type";
import { AddProduct } from "../actions/cart.action";
import { StateClass } from "@ngxs/store/internals";

@State<CartStateModel>({
  name: "cart",
  defaults: {
    products: []
  }
})
@Injectable()
export class CartState {
  @Selector()
  public static products(state: CartStateModel): ProductType[] {
    return state.products;
  }

  @Action(AddProduct)
  public addProduct(
    { getState, patchState }: StateContext<CartStateModel>,
    { payload }: AddProduct
  ): void {
    const state = getState();
    patchState({
      products: [...state.products, payload]
    });
  }
}
