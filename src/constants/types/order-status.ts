import { DataSource } from './status-source-type';

export enum OrderStatus {
  CANCEL = 'CANCEL',
  SUBSCRIPTION_ORDER = 'SUBSCRIPTION_ORDER',
  PAID = 'PAID',
  UNFULFULLED = 'UNFULFULLED',
  REFUNDED = 'REFUNDED',
  WAITING_CONFIRM = 'WAITING_CONFIRM',
}

export const OrderStatusSource: DataSource = {
  [OrderStatus.CANCEL]: { label: 'Cancel', color: 'gray', value: OrderStatus.CANCEL },
  [OrderStatus.SUBSCRIPTION_ORDER]: {
    label: 'Subscription order',
    color: 'gray',
    value: OrderStatus.SUBSCRIPTION_ORDER,
  },
  [OrderStatus.PAID]: { label: 'Paid', color: 'gray', value: OrderStatus.PAID },
  [OrderStatus.UNFULFULLED]: {
    label: 'UnFulFulled',
    color: 'gray',
    value: OrderStatus.UNFULFULLED,
  },
  [OrderStatus.REFUNDED]: { label: 'Refunded', color: 'gray', value: OrderStatus.REFUNDED },
  [OrderStatus.WAITING_CONFIRM]: {
    label: 'Waiting Confirm',
    color: 'gray',
    value: OrderStatus.WAITING_CONFIRM,
  },
};
