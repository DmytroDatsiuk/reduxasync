import { createSlice } from '@reduxjs/toolkit';

const filterContactSlice = createSlice({
  name: 'filter',
  initialState: { filterWord: '' },
  reducers: {
    filterContact(state, action) {
      state.filterWord = action.payload;
    },
  },
});

export const { filterContact } = filterContactSlice.actions;
export const filterContactsReducer = filterContactSlice.reducer;
