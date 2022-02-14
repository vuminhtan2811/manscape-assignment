import { AxiosError } from 'axios';

export type ApiError = AxiosError<{
  apiError?: {
    status: number;
    message: string;
  };
}>;
