import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsList: [],
    totalQuantity: 0,
    showCart: false,
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.itemsList.find((item) => newItem.id);
      if (existingItem) {
        existingItem.quantity++;
        existingItem.price += newItem.price;
      } else {
      }
    },
    removeFromCart() {},
    setShowCart(state) {},
  },
});
