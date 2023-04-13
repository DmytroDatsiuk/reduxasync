import { createSlice } from '@reduxjs/toolkit';
import { statusFilters } from './constants';

const filtersInitialState = {
  status: statusFilters.all,
  filterWord: '',
};

const filterSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
    filterContact(state, action) {
      state.filterWord = action.payload;
    },
  },
});

export const { setStatusFilter, filterContact } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
