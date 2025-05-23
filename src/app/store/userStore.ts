import { create } from 'zustand';

interface UserState {
  user: { username: string } | null;
  token:string
  login: (user: { username: string },token:string) => void;
  logout: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  token:"",
  user: null,
  login: (user,token) => set((s)=>({ ...s,user,token })),
  logout: () => set((s)=>({ ...s,user: null,token:"" })),
}));

