import { types } from 'mobx-state-tree';
import { createContext, useContext } from 'react';

export const numPageStore = types
	.model({
		pagNumber: types.optional(types.number, 0),
	})
	.actions((self) => ({
		increment() {
			self.pagNumber = self.pagNumber + 1;
		},
		decrement() {
			self.pagNumber = self.pagNumber - 1;
		},
	}));

export const PageContext = createContext();
export const usePage = () => useContext(PageContext);
