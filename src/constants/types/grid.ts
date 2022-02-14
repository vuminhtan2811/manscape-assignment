import { $Keys } from 'utility-types';
import { DataSource } from './status-source-type';

export type DataFormat = 'date' | 'datetime' | 'time';
export type DataType =
  | 'number'
  | 'text'
  | 'email'
  | 'phone'
  | 'date'
  | 'datetime'
  | 'url'
  | 'image'
  | 'status'
  | 'money'
  | 'bool'
  | 'id'
  | 'dateRange'
  | 'duration'
  | 'customizing'
  | 'time'
  | 'player'
  | 'tag'
  | 'accountIdNEmail'
  | 'switch'
  | 'amount'
  | 'textarea'
  | 'select';

export enum DetailFormMode {
  READ,
  EDIT,
  CREATE,
}

export interface FieldType<M extends Record<string, unknown> = Record<string, unknown>> {
  name: string;
  displayType: DataType;
  formatData?: DataFormat;
  field: $Keys<M>;
  sort?: string;
  required?: true;
  readonly?: true;
  hidden?: true;
  dataSource?: DataSource;
  style?: Record<string, any>;
  multipleStatus?: boolean;
}

export type ToolType = {
  names: string[];
  type: 'dateRange' | 'select' | 'input' | 'button';
  classNameColumn?: string;
  classNameElement?: string;
  // * Use for type select
  options?: DataSource;
  // * Use for type input | dateRange
  placeholder?: string;
  // * Use for type input
  inputType?: string;
  // * Use for type button
  label?: string;
};
