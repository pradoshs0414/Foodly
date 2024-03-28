import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    subTotal: 0,
    shipping: 0,
    tax: 0,
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const itemExist = state.items.find((i) => i.id === item.id);
      if (itemExist) {
        state.items.forEach((i) => {
          if (i.id === item.id) {
            i.quantity++;
          }
        });
      } else {
        state.items.push(item);
      }
    
    },
    increaseCartQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decreaseCartQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1
      } else {
        item.quantity--;
      }
    },
    removeDataFromCart: (state, action) => {
      const removeItem = state.items.filter((item) => item.id !== action.payload);
      state.items = removeItem;
    },
    deleteAllFromCart: (state, action) => {
      state.items = [];
    },
  },
});

export const {addToCart,deleteAllFromCart,increaseCartQuantity,decreaseCartQuantity,removeDataFromCart} = cartSlice.actions;
export default cartSlice.reducer;