import { Color } from './color';

export type DataSource = {
  [x: string]: DataSourceItem;
};

export interface DataSourceItem {
  label: string;
  value: unknown;
  color: Color;
}
