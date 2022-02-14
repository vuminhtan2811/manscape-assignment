import { Pagination } from 'constants/model/pagination';

export type SearchResponse<T = any> = {
  data?: T;
  page?: Pagination;
};
