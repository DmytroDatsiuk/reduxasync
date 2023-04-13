import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6424ec4b7ac292e3cff3ca97.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (args, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', args);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contact.id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const toggleChoosen = createAsyncThunk(
  'contacts/toggleChoosen',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.put(`/contacts/${contact.id}`, {
        choosen: !contact.choosen,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const toggleBlocked = createAsyncThunk(
  'contacts/toggleBlocked',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.put(`/contacts/${contact.id}`, {
        blocked: !contact.blocked,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteAllBlocked = createAsyncThunk(
  'contacts/deleteAllBlocked',
  async (contacts, thunkAPI) => {
    const arr = [];

    contacts.map(contact => {
      if (contact.blocked) {
        arr.push(contact.id);
      }
    });

    console.log(arr);
    try {
      contacts.map(async contact => {
        if (contact.blocked) {
          const response = await axios.delete(`/contacts/${contact.id}`);
          console.log(response.data);
          return response.data;
        }
      });
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
