import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string, phone?: string) => Promise<boolean>;
  logout: () => void;
}

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      
      login: async (email: string, password: string) => {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock authentication - in real app, this would be an API call
        const mockUser: User = {
          id: '1',
          name: 'John Doe',
          email: email,
          phone: '+1234567890'
        };
        
        set({ user: mockUser, isAuthenticated: true });
        return true;
      },
      
      signup: async (name: string, email: string, password: string, phone?: string) => {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock signup - in real app, this would be an API call
        const newUser: User = {
          id: Date.now().toString(),
          name,
          email,
          phone
        };