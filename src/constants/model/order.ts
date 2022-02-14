import { BaseEntity } from './base-entity';

export type OrderItem = BaseEntity & {
  id: string;
  name: string;
  quantity: number;
  price: number;
  imageUrl: string;
};

export type Orders = BaseEntity & {
  id: string;
  items: OrderItem[];
  shipAddress: string;
  status: string[];
  user?: Record<string, any>;
};
