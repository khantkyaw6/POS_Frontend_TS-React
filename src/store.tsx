import { create } from 'zustand';

export type State = {
	count: number;
	sidebar: boolean;
	cartItem: {
		_id: string; // assuming objectId is of type string
		name: string;
		price: number;
		category: string;
		image: string;
	}[];
};

type Actions = {
	increment: (qty: number) => void;
	decrement: (qty: number) => void;
	sidebarTrigger: () => void;
	addCartItem: (item: State['cartItem'][0]) => void;
};

const useStore = create<State & Actions>((set) => ({
	count: 0,
	sidebar: false,
	cartItem: [],
	addCartItem: (item: any) => {
		set((state) => ({ cartItem: [...state.cartItem, item] }));
	},
	sidebarTrigger: () => {
		set((state) => ({ sidebar: !state.sidebar }));
	},
	increment: (qty: number) => set((state) => ({ count: state.count + qty })),
	decrement: (qty: number) => set((state) => ({ count: state.count - qty })),
}));

export default useStore;
