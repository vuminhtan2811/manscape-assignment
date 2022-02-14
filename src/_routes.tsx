import OrderCard from './views/orders';

const appRoutes = [
  {
    path: '/orders',
    exact: true,
    name: 'Orders Page',
    component: OrderCard,
  },
];

export default appRoutes;
