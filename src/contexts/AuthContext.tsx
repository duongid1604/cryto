import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AuthProviderProps = {
  children: ReactNode;
};
export type AuthContextType = {
  accessToken: string | null;
  login: (token: string) => void;
  logout: () => void;
};

export const localAccessToken = 'accessToken';

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({children}: AuthProviderProps) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const initializeAccessToken = async () => {
      try {
        const token = await AsyncStorage.getItem(localAccessToken);
        if (token) {
          setAccessToken(token);
        }
      } catch (error) {
        console.error('Failed to get access token from AsyncStorage', error);
      }
    };

    initializeAccessToken().catch(error => {
      console.error('Failed to execute getAccessToken', error);
    });
  }, []);

  const login = async (token: string) => {
    setAccessToken(token);
    try {
      await AsyncStorage.setItem(localAccessToken, token);
    } catch (error) {
      console.error('Failed to save the access token to AsyncStorage', error);
    }
  };

  const logout = async () => {
    setAccessToken(null);
    try {
      await AsyncStorage.removeItem(localAccessToken);
    } catch (error) {
      console.error(
        'Failed to remove the access token from AsyncStorage',
        error,
      );
    }
  };

  return (
    <AuthContext.Provider value={{accessToken, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
