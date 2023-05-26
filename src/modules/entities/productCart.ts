import { ProductEntity } from "./product";

export interface ProductCart {
  product: ProductEntity;
  quantity: number;
}
