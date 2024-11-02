import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add(state, { payload }) {
      const { id } = payload;
      const doesItemExist = state.find((item) => item.id === id);
      if (doesItemExist) {
        return state.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
      } else {
        state.push({
          ...payload,
          quantity: 1,
        });
      }
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload.id);
    },
    decrementRemove(state, action) {
      const productIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );

      if (productIndex >= 0) {
        const product = state[productIndex];

        if (product.quantity > 1) {
          // If quantity is more than 1, reduce it by 1
          product.quantity -= 1;
        } else {
          // Otherwise, remove the product from the cart
          state.splice(productIndex, 1);
        }
      }
      // const { id } = payload;
      // return state.map((item) => {
      //   if (item.id === id) {
      //     return {
      //       ...item,
      //       quantity: item.quantity - 1,
      //     };
      //   }
      //   return item;
      // });
    },
  },
});

export const { add, remove, decrementRemove } = cartSlice.actions;
export default cartSlice.reducer;
