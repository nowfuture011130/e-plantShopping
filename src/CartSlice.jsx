import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload; // Destructure product details from the action payload
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++; // If item exists, increase its quantity
      } else {
        state.items.push({ name, image, cost, quantity: 1 }); // Else, add new item with quantity 1
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload);
      // Removes item whose name matches action.payload
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload; // Destructure name and new quantity from payload
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity; // Update item's quantity if found
      }
    },
  },
});

// Export actions for use in components
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export reducer for store.js
export default CartSlice.reducer;
