import { create } from 'zustand';

type DateStore = {
    isLoading: boolean;
    setIsLoading: (isLoading: boolean) => void;
}

export const useDateStore = create<DateStore>((set) => ({
    isLoading: false,
    setIsLoading: (isLoading) => set(() => ({ isLoading })),
}));
