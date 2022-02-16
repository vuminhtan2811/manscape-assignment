import { FieldType } from 'constants/types/grid';
import { OrderStatusSource } from 'constants/types/order-status';

export const listConf: FieldType[] = [
  {
    name: 'Order Code',
    field: 'id',
    displayType: 'id',
    required: true,
  },
  {
    name: 'Name',
    field: 'user.name',
    displayType: 'text',
    required: true,
  },
  {
    name: 'Phone',
    field: 'user.phone',
    displayType: 'phone',
    required: true,
  },
  {
    name: 'Ship Address',
    field: 'shipAddress',
    displayType: 'text',
    required: true,
    style: {
      width: '220px',
    },
  },
  {
    name: 'Created at',
    field: 'createdAt',
    displayType: 'datetime',
    required: true,
  },
  {
    name: 'Last Updated',
    field: 'lastModifiedAt',
    displayType: 'datetime',
    required: true,
  },
  {
    name: 'Status',
    field: 'status',
    displayType: 'status',
    dataSource: OrderStatusSource,
    multipleStatus: true,
  },
];
