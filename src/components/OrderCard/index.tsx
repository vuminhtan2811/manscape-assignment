import React from 'react';
import styled from 'styled-components';
import DataGrid from 'container/common/Grid';
import { FieldType } from 'constants/types/grid';
import { Orders, OrderItem } from '../../constants/model/order';
import { formatMoney } from '../../utils/format-number';
import moment from 'moment';
import { DateTimeDo } from '../../constants/date-time';
import Badge from 'components/Badge';
import { OrderStatusSource, OrderStatus } from '../../constants/types/order-status';

const Wrapper = styled.div`
  width: 100%;
  max-width: 860px;
  background: #f4f5f7;
  padding: 58px;
  outline: none;
  border-radius: 4px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 33px;
`;
const OrderCode = styled.div`
  color: #1d1d1d;
  font-family: Arial;
  font-style: normal;
`;
const TimeWrapper = styled.div`
  color: #1d1d1d;
  font-family: Arial;
  text-align: right;
  letter-spacing: -0.08px;
  font-size: 14px;
  line-height: 22px;
`;
const Body = styled.div`
  background: #ffffff;
  padding: 20px;
  font-family: Arial;

  table {
    box-shadow: none;
    thead tr {
      background-color: #ffffff;
    }
    thead tr th {
      text-transform: uppercase;
      color: #1d1d1d;
      font-family: Arial;
      font-weight: bold;
      font-size: 14px;
    }
    tbody tr:hover {
      cursor: initial;
      background-color: #ffffff;
    }
    tbody tr:last-of-type {
      border-bottom: 1px solid #e6e6e6;
    }
    tbody tr td {
      font-family: Arial;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: -0.08px;
      color: #1d1d1d;
    }
  }
`;

const Total = styled.div`
  font-style: normal;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  letter-spacing: -0.08px;
  color: #1d1d1d;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e6e6e6;
  padding: 0 20px 25px;
  margin-bottom: 30px;
`;
const Amount = styled.div``;
const ShippingAddress = styled.div`
  font-family: Arial;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: #1d1d1d;
  padding-bottom: 20px;
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 30px;
`;
const Address = styled.p`
  max-width: 200px;
  text-transform: unset;
  letter-spacing: -0.08px;
  font-weight: normal;
`;
const GroupButton = styled.div`
  padding-bottom: 15px;
`;
const Button = styled.button`
  background: #757575;
  border-radius: 4px;
  padding: 12px;
  text-align: center;
  color: #ffffff;
  font-weight: bold;
  text-align: center;
  font-size: 15px;
  line-height: 18px;
  outline: none;
  cursor: pointer;
  border: none;
  margin-right: 13px;
  transition: all 0.3s;
  &:hover {
    background-color: #7676df;
    color: #ffffff;
  }
`;
const StatusWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const orderConf: FieldType[] = [
  {
    name: '',
    field: 'imageUrl',
    displayType: 'image',
  },
  {
    name: 'Product',
    field: 'name',
    displayType: 'text',
    required: true,
  },
  {
    name: 'Quantity',
    field: 'quantity',
    displayType: 'number',
    required: true,
  },
  {
    name: 'Price',
    field: 'price',
    displayType: 'money',
    required: true,
  },
];

type OrderProps = {
  order: Orders;
  onCancel: (orders: Orders) => (e: React.MouseEvent) => void;
  onRefund: (orders: Orders) => (e: React.MouseEvent) => void;
  onResendConfirm: (orders: Orders) => (e: React.MouseEvent) => void;
  onResendTracking: (orders: Orders) => (e: React.MouseEvent) => void;
};

const OrderCard = ({
  order,
  onCancel,
  onRefund,
  onResendConfirm,
  onResendTracking,
}: OrderProps) => {
  const calculateTotalPrice = (items: OrderItem[]): string => {
    let total = 0;
    items.forEach((_item) => {
      total += _item.price * _item.quantity;
    });
    return formatMoney(total);
  };

  const statuses: string[] = order.status.toString().split(',');

  return (
    <Wrapper>
      <Header>
        <OrderCode>
          <b>Order</b> {order.id}
        </OrderCode>
        <TimeWrapper>
          Created on {moment(order.createdAt).format(DateTimeDo)} <br />
          Last updated on {moment(order.lastModifiedAt).format(DateTimeDo)}
        </TimeWrapper>
      </Header>
      <Body>
        <DataGrid items={order.items} conf={orderConf} />
        <Total>
          <b>Total</b>
          <Amount>{calculateTotalPrice(order.items)}</Amount>
        </Total>
        <ShippingAddress>
          Shipping Address
          <Address>{order.shipAddress}</Address>
          <StatusWrapper>
            {statuses.map((_el) => {
              const _status = OrderStatusSource?.[_el as string] as Record<string, any>;
              return (
                <Badge size="md" label={_status.label as string} color={_status.color as string} />
              );
            })}
          </StatusWrapper>
        </ShippingAddress>
        <GroupButton>
          {!order.status.includes(OrderStatus.CANCEL) &&
            !order.status.includes(OrderStatus.REFUNDED) && (
              <Button onClick={onCancel(order)}>Cancel</Button>
            )}
          {!order.status.includes(OrderStatus.REFUNDED) &&
            order.status.includes(OrderStatus.PAID) && (
              <Button onClick={onRefund(order)}>Refund</Button>
            )}
          {!order.status.includes(OrderStatus.REFUNDED) &&
            !order.status.includes(OrderStatus.CANCEL) && (
              <>
                <Button onClick={onResendConfirm(order)}>Resend Confirmation</Button>
                <Button onClick={onResendTracking(order)}>Resend Tracking</Button>
              </>
            )}
        </GroupButton>
      </Body>
    </Wrapper>
  );
};
export default OrderCard;
