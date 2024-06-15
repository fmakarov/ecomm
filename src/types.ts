export type TCatalog = {
  _id: number;
  title: string;
}

export interface IGoods {
  _id?: string;
  name: string;
  price: number;
  size: string;
  color: string;
  power: string;
  catalogType: TCatalog;
  productImage: string;
}

export interface ICartItems extends IGoods {
  count: number;
}