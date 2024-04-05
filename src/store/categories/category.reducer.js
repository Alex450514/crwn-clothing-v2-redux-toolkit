import { createSlice } from '@reduxjs/toolkit';


export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
  },
  reducers: {
    // Directly using the action type as the method name
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCategories } = categoriesSlice.actions;

export const categoriesReducer = categoriesSlice.reducer;
