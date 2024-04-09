import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  cart: boolean;
}

const initialState: UserState = {
  cart: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        cart: action.payload,
      };
    },
  },
});

export const { setCart } = userSlice.actions;

export default userSlice.reducer;
