import { ItemI } from "@/utils/interfaces";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface StartupStateI {
  inputVlaue: string;
  suggestions: ItemI[];
  values: ItemI[];
  length: number;
  difficulty: number;
}

const initialState: StartupStateI = {
  inputVlaue: "",
  suggestions: [],
  values: [],
  length: 0,
  difficulty: 0,
};

export const startupSlice = createSlice({
  name: "startup",
  initialState,
  reducers: {
    setInputValue: (state, action: PayloadAction<string>) => {
      state.inputVlaue = action.payload;
    },
    setSuggestions: (state, action: PayloadAction<ItemI[]>) => {
      state.suggestions = action.payload;
    },
    setValues: (state, action: PayloadAction<ItemI[]>) => {
      state.values = action.payload;
    },
    setLength: (state, action: PayloadAction<number>) => {
      state.length = action.payload;
    },
    setDifficulty: (state, action: PayloadAction<number>) => {
      state.difficulty = action.payload;
    },
  },
});

export const {
  setInputValue,
  setSuggestions,
  setValues,
  setLength,
  setDifficulty,
} = startupSlice.actions;

export default startupSlice.reducer;
