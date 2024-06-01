import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../utils/products";

type FormData = {
  fullName: string;
  street: string;
  phoneNumber: string;
  country: string;
  city: string;
};
interface UserState {
  cart: boolean;
  cartProducts: IProduct[];
  favourite: IProduct[];
  orderer: FormData;
  searchProduct: string;
}

const initialState: UserState = {
  cart: false,
  cartProducts: JSON.parse(localStorage.getItem("cartProducts") || "[]"),
  favourite: JSON.parse(localStorage.getItem("favourite") || "[]"),
  orderer: {
    fullName: "",
    street: "",
    phoneNumber: "",
    country: "",
    city: "",
  },
  searchProduct: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setSearch: (state, { payload }) => {
      state.searchProduct = payload;
    },
    setCart: (state, { payload }) => {
      state.cart = payload;
    },
    setAddToFavourite: (state, { payload }: { payload: IProduct }) => {
      const check = state.favourite.some((item) => item.id === payload.id);
      if (!check) {
        state.favourite.push(payload);
        localStorage.setItem("favourite", JSON.stringify(state.favourite));
      }
    },
    setRemoveFromFavourite: (state, { payload }: { payload: number }) => {
      state.favourite = state.favourite.filter((item) => item.id !== payload);
      localStorage.setItem("favourite", JSON.stringify(state.favourite));
    },
    setAddToCart: (state, { payload }: { payload: IProduct }) => {
      const check = state.cartProducts.some((item) => item.id === payload.id);
      if (!check) {
        state.cartProducts.push(payload);
        localStorage.setItem(
          "cartProducts",
          JSON.stringify(state.cartProducts)
        );
      }
    },
    setRemoveFromCart: (state, { payload }: { payload: number }) => {
      state.cartProducts = state.cartProducts.filter(
        (item) => item.id !== payload
      );
      localStorage.setItem("cartProducts", JSON.stringify(state.cartProducts));
    },
    setOrderer: (state, { payload }) => {
      state.orderer = payload;
    },
  },
});

export const {
  setCart,
  setAddToFavourite,
  setRemoveFromFavourite,
  setAddToCart,
  setRemoveFromCart,
  setOrderer,
  setSearch,
} = userSlice.actions;

export default userSlice.reducer;
