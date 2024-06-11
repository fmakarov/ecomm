export interface IGoods {
  _id: string;
  name: string;
  price: number;
  size: string;
  color: string;
}

export interface ICartItems extends IGoods {
  count: number;
}