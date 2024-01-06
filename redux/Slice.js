import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  cart: [],
  favori: [],
  count: 1,
  totalPrice: 0,
  subTotal: 0,
  cartCount: 0,
};



const Slice = createSlice({
  name: "cartData",
  initialState,
  reducers: {
    increase(state) {
      state.count++;
    },
    decrease(state) {
      if (state.count > 1) {
        state.count--;
      }
    },
    adToCart(state, action) {
      const newCoffe = action.payload;
      const existingCoffe = state.cart.find((item) => item.id === newCoffe.id);
      if (state.count > 0) {
        if (existingCoffe) {
          existingCoffe.quantity += state.count;
        } else {
          state.cart.push({
            ...newCoffe,
            quantity: state.count,
          });
        }
        state.cartCount = state.cart.reduce(
          (count, item) => count + item.quantity,
          0
        );
        state.subTotal = state.cart.reduce(
          (total, item) => total + Number(item.price) * item.quantity,
          0
        );
      }
      state.count = 1;
AsyncStorage.setItem('cart', JSON.stringify(state.cart));
    },
    addToFavoriCart(state, action) {
      const newfavoriCard = action.payload;
      const exisitingFavoriCardIndex = state.favori.findIndex(
        (item) => item.id === newfavoriCard.id
      );
      if (exisitingFavoriCardIndex === -1) {
        state.favori.push(newfavoriCard);
      } else {
        const uptateFavori = state.favori.filter(
          (item) => item.id !== newfavoriCard
        );
        state.favori = uptateFavori;
      }
    },
    removeFromCart(state, action) {
      const cartId = action.payload;
      state.cart = state.cart.filter((item) => item.id !== cartId);
      AsyncStorage.setItem('cart', JSON.stringify(state.cart));
    },
    removeFromFavorite(state, action) {
      const cartId = action.payload;
      state.favori = state.favori.filter((item) => item.id !== cartId);
    },
    cartTotal(state){
    const count=state.cart.map((item)=>item.quantity)
    const sum=count.reduce((acc,curr)=>acc+curr,0)
    state.cartCount=sum
    },
    cartTotalPrice(state){
      let count=state.cart.map(
        (item)=>item.quantity*Number(item.price)
      )
      let total=count.reduce((acc,curr)=>acc+curr,0)
      state.subTotal=total
      state.totalPrice=total+1
    },
    clearCart(state,action) {
      state.cart = [];
    },
  },
});
export default Slice;

export const { increase, decrease, adToCart, addToFavoriCart, removeFromCart,removeFromFavorite,cartTotalPrice,cartTotal,clearCart } =
  Slice.actions;
