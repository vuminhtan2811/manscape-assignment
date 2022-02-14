import React from 'react';
import styled from 'styled-components';
import { get } from 'lodash';
import { ValuesType } from 'utility-types';
import { FieldType } from 'constants/types/grid';
import Cell from './Cell';
import CellHead from './CellHead';

const Wrapper = styled.div`
  table {
    width: 100%;
    max-width: 1200px;
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);

    thead tr {
      background-color: #7676df;
      color: #ffffff;
      text-align: left;
    }

    th,
    td {
      padding: 12px 15px;
    }

    tbody tr {
      border-bottom: 1px solid #e6e6e6;
    }

    tbody tr:nth-of-type(even) {
    }

    tbody tr:last-of-type {
      border-bottom: 1px solid #7676df;
    }
    tbody tr:hover {
      cursor: pointer;
      background-color: #f3f3f3;
    }
  }
`;

const Title = styled.h3`
  font-size; 20px;
`;
interface Props {
  items: ({ id?: string } & Record<string, unknown>)[];
  conf: FieldType[];
  title?: string;
  onRowClicked?: (row?: any, index?: number) => void;
}

function DataGrid({ items, conf, title, onRowClicked = () => {} }: Props) {
  const renderRowHead = (): React.ReactNode => {
    return (
      <>
        {conf.map((pName) => {
          if (pName.hidden) return null;
          return (
            <CellHead
              key={pName.field}
              field={pName.field}
              name={pName.name}
              dataType={pName.displayType}
              sortable={!!pName.sort}
            />
          );
        })}
      </>
    );
  };
  const renderTableRow = (
    rowData: ValuesType<Exclude<Props['items'], undefined>>,
  ): React.ReactNode => {
    return (
      <>
        {conf.map((pName) => {
          const data = get(rowData, pName.field, '');
          if (pName.hidden) return null;
          return (
            <Cell
              key={pName.field}
              cellType={pName.displayType ?? pName.displayType}
              data={data as any}
              dataSource={pName.dataSource}
              style={pName.style}
            />
          );
        })}
      </>
    );
  };

  return (
    <Wrapper>
      {title && <Title>{title}</Title>}
      <table>
        <thead>
          <tr>{renderRowHead()}</tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} onClick={() => onRowClicked(item, index)}>
              {renderTableRow(item as any)}
            </tr>
          ))}
        </tbody>
      </table>
    </Wrapper>
  );
}

export default DataGrid;
