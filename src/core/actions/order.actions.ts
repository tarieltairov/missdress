import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export type OrderData = {
  fullName: string;
  street: string;
  phoneNumber: string;
  country: string;
  city: string;
};

interface IProduct {
  title: string;
  totalPrice: number;
  count: number;
}

interface IOrder {
  products: IProduct[];
  priceWithSale: number;
  totalPrice: number;
}
interface IData {
  aboutClient: OrderData;
  order: IOrder;
}

export const postOrderData = createAsyncThunk(
  "users/postOrderData",
  async (data: IData) => {
    const response = await axios.post("http://localhost:3000/api/orders", data);
    return response.data;
  }
);
