import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import LoginForm from '../components/LoginForm';
import {AuthContext} from '../../../contexts/AuthContext';
import {login} from '../../../api/auth';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

jest.mock('../../../api/auth');
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn(() => Promise.resolve()),
  getItem: jest.fn(() => Promise.resolve(null)),
  removeItem: jest.fn(() => Promise.resolve()),
  clear: jest.fn(() => Promise.resolve()),
  getAllKeys: jest.fn(() => Promise.resolve([])),
  multiGet: jest.fn(() => Promise.resolve([])),
  multiSet: jest.fn(() => Promise.resolve()),
  multiRemove: jest.fn(() => Promise.resolve()),
}));

jest.mock('react-native-device-info', () => ({
  getUserAgent: jest.fn(() => Promise.resolve('mocked-user-agent')),
  getUniqueId: jest.fn(() => 'mocked-unique-id'),
  getSystemVersion: jest.fn(() => 'mocked-system-version'),
}));

jest.mock('../../../api/auth', () => ({
  login: jest.fn(),
}));

const queryClient = new QueryClient();

const mockLogin = login as jest.MockedFunction<typeof login>;

describe('LoginForm', () => {
  const setAccessToken = jest.fn();
  const logout = jest.fn();
  const accessToken = 'mock-access-token';

  const renderComponent = () =>
    render(
      <>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.light}>
          <QueryClientProvider client={queryClient}>
            <AuthContext.Provider
              value={{login: setAccessToken, logout, accessToken}}>
              <LoginForm />
            </AuthContext.Provider>
          </QueryClientProvider>
        </ApplicationProvider>
      </>,
    );

  it('renders correctly', () => {
    const {getByPlaceholderText, getByTestId} = renderComponent();

    expect(getByPlaceholderText('Email')).toBeTruthy();
    expect(getByPlaceholderText('Password')).toBeTruthy();
    expect(getByTestId('signin-button')).toBeTruthy();
  });

  it('shows error messages for invalid inputs', async () => {
    const {getByPlaceholderText, getByText, getByTestId} = renderComponent();

    fireEvent.changeText(getByPlaceholderText('Email'), 'invalid-email');
    fireEvent.changeText(getByPlaceholderText('Password'), 'short');
    fireEvent.press(getByTestId('signin-button'));

    await waitFor(() => {
      expect(getByText('Invalid email format')).toBeTruthy();
      expect(getByText('Password must be at least 8 characters')).toBeTruthy();
    });
  });

  it('calls login function with correct inputs', async () => {
    mockLogin.mockResolvedValueOnce({
      data: {accessToken: 'mock-token'},
    });

    const {getByPlaceholderText, getByTestId} = renderComponent();

    fireEvent.changeText(getByPlaceholderText('Email'), 'test@example.com');
    fireEvent.changeText(getByPlaceholderText('Password'), 'password123');
    fireEvent.press(getByTestId('signin-button'));

    await waitFor(() => {
      expect(setAccessToken).toHaveBeenCalledWith('mock-token');
    });
  });

  it('shows error message on login failure', async () => {
    mockLogin.mockRejectedValueOnce(new Error('Invalid credentials'));

    const {getByPlaceholderText, getByTestId} = renderComponent();

    fireEvent.changeText(getByPlaceholderText('Email'), 'test@example.com');
    fireEvent.changeText(getByPlaceholderText('Password'), 'password123');
    fireEvent.press(getByTestId('signin-button'));

    await waitFor(() => {
      expect(getByTestId('error-text')).toBeTruthy();
    });
  });
});
