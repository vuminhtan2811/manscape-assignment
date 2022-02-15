import React from 'react';
import styled from 'styled-components';
import DataGrid from 'container/common/DataGrid';
import OrderCard from 'components/OrderCard';
import CancelOrder from 'components/CancelOrder';
import RefundOrder from 'components/RefundOrder';
import { listConf } from './conf';
import { useModal } from 'hook/modal';
import { toast } from 'react-toastify';
import { Orders } from 'constants/model/order';
import { searchOrders, updateOrder } from 'services/order';
import { OrderStatus } from 'constants/types/order-status';

const PageWrapper = styled.section``;

const Dashboard: React.FunctionComponent = () => {
  const [orders, setOrders] = React.useState<Orders[]>([]);
  const { onShow, onClose } = useModal();

  React.useEffect(() => {
    searchOrders().then((res) => {
      setOrders(res as any);
    });
  }, []);

  const updateOrderById = (order: Orders, orders: Orders[]): Orders[] => {
    const dataFiltered: Orders[] = orders;
    dataFiltered.forEach((_item) => {
      if (_item.id === order.id) {
        _item.status = order.status;
      }
    });
    return dataFiltered;
  };

  const onCancel = (order: Orders) => (e: React.MouseEvent) => {
    e.stopPropagation();

    const doCancel = (id: string = order.id) => {
      const data = { ...order, status: [...order.status, OrderStatus.CANCEL] };
      updateOrder({ id, formData: data }).then(() => {
        setOrders(updateOrderById(data, orders));
        // toast('Canceled order success', { type: 'success' });
        onShow(
          <OrderCard
            order={order}
            onCancel={onCancel}
            onRefund={onRefund}
            onResendConfirm={onResendConfirm}
            onResendTracking={onResendTracking}
          />,
        );
      });
    };

    onShow(<CancelOrder order={order} onCancel={onClose} onConfirm={doCancel} />);
  };

  const onRefund = (order: Orders) => (e: React.MouseEvent) => {
    e.stopPropagation();

    const doRefund = (id: string = order.id) => {
      /** Update status */
      const data = {
        ...order,
        status: [...order.status, OrderStatus.REFUNDED],
      };
      /** Call to service refund */
      updateOrder({ id, formData: data }).then(() => {
        setOrders(updateOrderById(data, orders));
        toast('Refund order success', { type: 'success' });
        onShow(
          <OrderCard
            order={order}
            onCancel={onCancel}
            onRefund={onRefund}
            onResendConfirm={onResendConfirm}
            onResendTracking={onResendTracking}
          />,
        );
      });
    };

    onShow(<RefundOrder order={order} onCancel={onClose} onConfirm={doRefund} />);
  };

  const onResendConfirm = (orders: Orders) => (e: React.MouseEvent) => {
    /* Implement the resend email confirm logic here */
    alert('This feature is not implemented yet');
    e.stopPropagation();
  };

  const onResendTracking = (orders: Orders) => (e: React.MouseEvent) => {
    /* Implement the resend tracking  logic here */
    alert('This feature is not implemented yet');
    e.stopPropagation();
  };

  const onRowClicked = (rowData: Orders) => {
    if (rowData.id) {
      onShow(
        <OrderCard
          order={rowData}
          onCancel={onCancel}
          onRefund={onRefund}
          onResendConfirm={onResendConfirm}
          onResendTracking={onResendTracking}
        />,
      );
    }
  };

  return (
    <PageWrapper>
      <DataGrid items={orders} title="Orders" conf={listConf} onRowClicked={onRowClicked} />
    </PageWrapper>
  );
};

export default Dashboard;
