import { create } from 'zustand';

interface AuthState {
  phone: string;
  otp: string;
  isLoggedIn: boolean;
  isOtpSent: boolean;
  setPhone: (phone: string) => void;
  setOtp: (otp: string) => void;
  sendOtp: () => void;
  verifyOtp: () => void;
  skipLogin: () => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  phone: '',
  otp: '',
  isLoggedIn: false,
  isOtpSent: false,
  setPhone: (phone) => set({ phone }),
  setOtp: (otp) => set({ otp }),
  sendOtp: () => set({ isOtpSent: true }),
  verifyOtp: () => set({ isLoggedIn: true, isOtpSent: false }),
  skipLogin: () => set({ isLoggedIn: true }),
  logout: () => set({ isLoggedIn: false, phone: '', otp: '', isOtpSent: false }),
}));
