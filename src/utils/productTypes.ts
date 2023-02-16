export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  in_stock: boolean;
  is_featured_product: boolean;
  is_best_seller: boolean;
  category: string;
  product_type: null | string;
}

export enum Product_Types {
  console = 'console',
  controller = 'controller',
  vgame = 'video game',
}

export interface ICartItem extends IProduct {
  quantity: number;
}
