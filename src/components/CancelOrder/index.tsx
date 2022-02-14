import React from 'react';
import styled from 'styled-components';
import { Orders } from '../../constants/model/order';

const Wrapper = styled.div`
  border-radius: 4px;
  background: #ffffff;
`;

const Header = styled.header`
  border-bottom: 1px solid #dcdee0;
`;
const Title = styled.h3`
  margin: 0;
  padding: 10px 20px;
`;
const Description = styled.p`
  margin-top: 0;
`;
const Body = styled.div`
  padding: 10px 20px;
`;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
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

type Props = {
  order: Orders;
  onConfirm: (id: string) => void;
  onCancel: () => void;
};

const CancelOrder: React.FunctionComponent<Props> = ({ order, onConfirm, onCancel }: Props) => {
  return (
    <Wrapper>
      <Header>
        <Title>Cancel Order</Title>
      </Header>
      <Body>
        <Description>Do you really want to cancel order {order.id}?</Description>
        <ButtonGroup>
          <Button onClick={() => onConfirm(order.id)}>Yes</Button>
          <Button onClick={onCancel}>No</Button>
        </ButtonGroup>
      </Body>
    </Wrapper>
  );
};

export default CancelOrder;
