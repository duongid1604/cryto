import {Endpoint} from './endpoint.ts';
import createAxiosInstance from './apiConfig.ts';

export const getMarketSummaries = async () => {
  const axiosInstance = await createAxiosInstance();

  try {
    const response = await axiosInstance.get(Endpoint.summaries);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch market summaries');
  }
};

export const getMarkets = async () => {
  const axiosInstance = await createAxiosInstance();

  try {
    const response = await axiosInstance.get(Endpoint.markets);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch markets');
  }
};
