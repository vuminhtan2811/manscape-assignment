import React from 'react';
import { DataType } from 'constants/types/grid';
import styled from 'styled-components';

const Wrapper = styled.th`
  white-space: nowrap;
`;

interface Props {
  field: string;
  name: string;
  className?: string;
  dataType?: DataType;
  sortable?: boolean;
  sortOrder?: 'desc' | 'asc';
  onSortChange?: (sort: string) => void;
}

function CellHead(props: Props) {
  const onClick = (): void => {
    if (props.sortable && props.onSortChange) {
      props.onSortChange(`${props.field},${props.sortOrder === 'asc' ? 'desc' : 'asc'}`);
    }
  };

  let align: 'right' | 'left' | 'centered';
  switch (props.dataType) {
    case 'money':
    case 'number':
      align = 'right';
      break;
    case 'tag':
    case 'select':
    case 'status':
      align = 'centered';
      break;
    default:
      align = 'left';
      break;
  }

  return (
    <Wrapper key={props.field} onClick={onClick}>
      <div className="th-wrap">{props.name}</div>
    </Wrapper>
  );
}

export default CellHead;
