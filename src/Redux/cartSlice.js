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
  },
});

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;