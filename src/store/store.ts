import { create } from "zustand";

type State = {
  isUserLoggedIn: boolean;
    setIsUserLoggedIn: (value: boolean) => void;
    userEmailAddress: string;
    setUserEmailAddress: (value: string) => void;
    userName: string;
    setUserName: (value: string) => void;

};

export const useStore = create<State>((set) => ({
  isUserLoggedIn: false,
  setIsUserLoggedIn: (value) => set({ isUserLoggedIn: value }),
    userEmailAddress: '',
    setUserEmailAddress: (value) => set({ userEmailAddress: value }),
    userName: '',
    setUserName: (value) => set({ userName: value }),
}));