export type TCatalog = {
  _id: number;
  title: string;
}

export interface IGoods {
  _id: number;
  title: string;
  description?: string;
  price: number;
  category: number;
  productImage: string;
  downPayment: boolean;
  discount: number;
  promotion: boolean;
}

export interface IElectronics extends IGoods {
  processor: string;
  color: Array<string>;
}

export interface IFoods extends IGoods {
  dateCreate: string;
  dateExpire: string;
}

export interface IClothes extends IGoods {
  size: [string, string];
  color: [string, string];
}

export interface IFurniture extends IGoods {
  size: string;
  color: [string, string];
}

export interface ICartItems extends IGoods {
  count: number;
}