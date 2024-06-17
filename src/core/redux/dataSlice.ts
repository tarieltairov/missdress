import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../utils/products";
import { OrderData } from "../actions/order.actions";

interface UserState {
  cart: boolean;
  cartProducts: IProduct[];
  favourite: IProduct[];
  orderer: OrderData;
  searchProduct: string;
  hasFullOrdererData: boolean;
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
  hasFullOrdererData: false,
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
      state.hasFullOrdererData = true;
    },
    setUpdateCardToTalPrice: (state, { payload }) => {
      const products = JSON.parse(localStorage.getItem("cartProducts") || "");

      // Находим текущий продукт по id и обновляем его totalPrice
      const updatedProducts = products.map((product: IProduct) => {
        if (product.id === payload.id) {
          return { ...product, totalPrice: payload.price };
        }
        return product;
      });

      // Сохраняем обновленные продукты в localStorage
      localStorage.setItem("cartProducts", JSON.stringify(updatedProducts));
      state.cartProducts = updatedProducts;
    },
    setClearAfterOrder: (state) => {
      state.orderer = {
        fullName: "",
        street: "",
        phoneNumber: "",
        country: "",
        city: "",
      };
      state.cartProducts = [];
      state.hasFullOrdererData = false;
      localStorage.setItem("cartProducts", JSON.stringify(state.cartProducts));
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
  setUpdateCardToTalPrice,
  setClearAfterOrder,
} = userSlice.actions;

export default userSlice.reducer;
