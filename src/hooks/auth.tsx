/* eslint-disable @typescript-eslint/ban-types */
import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthState {
  token: string;
  operator: OperatorProps;
}

interface OperatorProps {
  avatar: string;
  avatar_url: string;
  email: string;
  id: string;
  name: string;
  type: string;
}

interface AuthContextProps {
  operator: OperatorProps;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@AvalieAdmin:token');
    const operator = localStorage.getItem('@AvalieAdmin:operator');

    if (token && operator) {
      return {
        token,
        operator: JSON.parse(operator),
      };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/sessions', {
      email,
      password,
    });

    const { token, operator } = response.data;

    localStorage.setItem('@AvalieAdmin:token', token);
    localStorage.setItem('@AvalieAdmin:operator', JSON.stringify(operator));

    setData({
      token,
      operator,
    });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@AvalieAdmin:token');
    localStorage.removeItem('@AvalieAdmin:operator');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ operator: data.operator, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextProps {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
