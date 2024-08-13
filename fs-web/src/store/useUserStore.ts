import create from 'zustand';

type User = {
  id: number;
  name: string;
  email: string;
};

type UserStore = {
  users: User[];
  fetchUsers: () => Promise<void>;
  addUser: (user: User) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  users: [],
  fetchUsers: async () => {
    const response = await fetch('/api/users');
    const data = await response.json();
    set({ users: data });
  },
  addUser: (user) => set((state) => ({ users: [...state.users, user] })),
}));
