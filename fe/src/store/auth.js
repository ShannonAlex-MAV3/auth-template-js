import { create } from 'zustand';

const useAuth = create((set, get) => ({
    user: null,
    login: (user) => set({ user }),
    logout: () => set({ user: null }),
    isAuthenticated: () => get().user !== null,
}));

export default useAuth;