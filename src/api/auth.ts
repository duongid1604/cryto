import createAxiosInstance from './apiConfig.ts';
import {Endpoint} from './endpoint.ts';

export type LoginParams = {
  email: string;
  password: string;
};

export const login = async ({email, password}: LoginParams) => {
  const axiosInstance = await createAxiosInstance();

  try {
    const response = await axiosInstance.post(Endpoint.login, {
      email,
      password,
      captcha: 'internal_testing_captcha',
    });

    return response.data;
  } catch (error) {
    throw new Error('Login failed');
  }
};
