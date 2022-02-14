import { API } from 'utils/api';
import { stringify } from 'query-string';
import { Orders } from 'constants/model/order';
import { ApiError } from 'constants/api-error';
import { Pageable } from 'constants/model/pageable';
import { API_ENDPOINT } from 'constants/api-endpoint';
import { SearchResponse } from 'constants/search-response';

type Params = Pageable & {};

export const searchOrders = (params?: Params) => {
  return new Promise<SearchResponse<{ orders: Orders }>>((resolve, reject) => {
    API.get<SearchResponse<{ orders: Orders }>>(
      API_ENDPOINT.ORDER + (params ? '?' + stringify(params, { skipNull: true }) : ''),
    )
      .then((res) => resolve(res.data))
      /** Return message key i18n */
      .catch((err: ApiError) => reject(err.response?.data.apiError?.message || 'default_error'));
  });
};

type updateOrderParams = {
  id: string;
  formData: Record<string, unknown>;
};

export const updateOrder = (params: updateOrderParams): Promise<any> => {
  return new Promise<SearchResponse<{ orders: Orders }>>((resolve, reject) => {
    API.patch(`${API_ENDPOINT.ORDER}/${params.id}`, params.formData)
      .then((res) => resolve(res.data))
      /** Return message key i18n */
      .catch((err: ApiError) => reject(err.response?.data.apiError?.message || 'default_error'));
  });
};
