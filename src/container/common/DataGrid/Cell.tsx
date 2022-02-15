/* eslint-disable jsx-a11y/anchor-is-valid */
import moment from 'moment';
import React from 'react';
import Badge from 'components/Badge';
import { Link } from 'react-router-dom';
import { DateFormat, DatetimeFormat, TimeFormat, TimeWithZoneFormat } from 'constants/date-time';
import { DataType } from 'constants/types/grid';
import { DataSource } from 'constants/types/status-source-type';
import { stopPropagation } from 'utils/stop-propagation';
import { formatMoney } from '../../../utils/format-number';

interface Props {
  cellType: DataType;
  data: any;
  dataSource?: DataSource;
  style?: Record<string, any>;
}

function Cell(props: Props) {
  let cell: React.ReactElement;

  switch (props.cellType) {
    case 'number':
      const number = parseInt(props.data as string);
      cell = (
        <td style={{ textAlign: 'center' }}>
          {isNaN(number) ? '---' : new Intl.NumberFormat().format(Number(props.data))}
        </td>
      );
      break;

    case 'time':
      cell = props.data ? (
        <td>{moment(props.data, TimeWithZoneFormat).format(TimeFormat)}</td>
      ) : (
        <td />
      );
      break;

    case 'date':
      cell = <td>{moment(props.data).format(DateFormat)}</td>;
      break;

    case 'text':
      cell = <td style={props.style}>{props.data}</td>;

      break;
    case 'datetime':
      cell = <td>{moment(props.data).format(DatetimeFormat)}</td>;
      break;

    case 'phone':
      cell = <td>+{props.data}</td>;
      break;

    case 'email':
      cell = (
        <td>
          <a href={`mailto:${props.data}`} target="mailtostaff">
            {props.data}
          </a>
        </td>
      );
      break;

    case 'url':
      const { label, url } = props.data as { label: string; url: string };
      cell = (
        <td>
          <Link to={`${url}`} onClick={stopPropagation}>
            {label}
          </Link>
        </td>
      );
      break;

    case 'bool':
      cell = <td />;
      break;

    case 'money':
      cell = <td>{formatMoney(props.data as number)}</td>;
      break;

    case 'status':
      const strSplit: string[] = props.data.toString().split(',');
      cell = (
        <td>
          {strSplit.map((_el) => {
            const _status = props.dataSource?.[_el as string] as Record<string, any>;
            return (
              <Badge size="sm" label={_status.label as string} color={_status.color as string} />
            );
          })}
        </td>
      );
      break;

    case 'select':
      cell = <td>{props.dataSource?.[props.data as string]?.label ?? props.data}</td>;
      break;

    case 'id':
      cell = <td style={{ fontWeight: 'bold' }}>{props.data}</td>;
      break;

    case 'image':
      cell = (
        <td>
          <img src={props.data} style={{ width: '60px', height: 'auto' }} />
        </td>
      );
      break;

    default:
      cell = <td>{Array.isArray(props.data) ? props.data.join(', ') : props.data}</td>;
      break;
  }

  return cell;
}

export default Cell;
