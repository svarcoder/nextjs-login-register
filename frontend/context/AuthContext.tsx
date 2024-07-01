import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';
import Router from 'next/router';
import { Base_Url } from '@/common';

interface AuthContextType {
  user: any;
  register: (username: string, email: string, password: string, role: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(null);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const res = await axios.get(`${Base_Url}/api/users/profile`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUser(res.data);
          Router.push('/dashboard');
        } catch (error) {
          localStorage.removeItem('token');
          setUser(null);
          Router.push('/');
        }
      }
    };
    checkUser();
  }, [reload]);

  const register = async (username: string, email: string, password: string, role: string) => {
    const res = await axios.post(`${Base_Url}/api/auth/register`, { username, email, password, role },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    Router.push('/login');
  };

  const login = async (email: string, password: string) => {
    const res = await axios.post(`${Base_Url}/api/auth/login`, { email, password },{
      headers: {
        'Content-Type': 'application/json',
      },
    });
    localStorage.setItem('token', res.data.token);
    setUser(res.data.user);
    Router.push('/dashboard');
    setReload(!reload)
  };

  const logout = async () => {
    await axios.post(`${Base_Url}/api/auth/logout`);
    localStorage.removeItem('token');
    setUser(null);
    Router.push('/');
    setReload(!reload)
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
