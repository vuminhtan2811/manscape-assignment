import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.span<{ size?: 'sm' | 'md' | 'ld'; color: string }>`
  background: ${(props) => props.color};
  margin-bottom: 3px;
  padding: 5px 8px;
  border-radius: 25px;
  display: block;
  text-align: center;
  color: #ffffff;
  font-weight: bold;
  width: max-content;
  fontsize: ${({ size }) => (size === 'sm' ? '12px' : size === 'md' ? '15px' : '18px')};
  margin-right: 10px;
`;

type Props = {
  size: 'sm' | 'md' | 'ld';
  label: string;
  color: string;
};

const Badge: React.FunctionComponent<Props> = ({ size, label, color }: Props) => {
  return (
    <Wrapper color={color} size={size}>
      {label}
    </Wrapper>
  );
};

export default Badge;
