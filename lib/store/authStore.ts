'use client';

import { create } from 'zustand';

interface User {
  id: string;
  email: string;
  name: string;
  role: 'customer' | 'admin';
}

interface AuthStore {
  user: User | null;
  isLoggedIn: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (email: string, name: string, password: string) => Promise<void>;
  setUser: (user: User) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isLoggedIn: false,

  login: async (email, password) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (data.user) {
        set({ user: data.user, isLoggedIn: true });
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  },

  register: async (email, name, password) => {
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, password }),
      });
      const data = await response.json();
      if (data.user) {
        set({ user: data.user, isLoggedIn: true });
      }
    } catch (error) {
      console.error('Register error:', error);
    }
  },

  logout: () => set({ user: null, isLoggedIn: false }),

  setUser: (user) => set({ user, isLoggedIn: true }),
}));
