import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = [
  {
    id: 'id-1',
    name: 'Rosie Simpson',
    number: '+380934591256',
    choosen: true,
    blocked: false,
  },
  {
    id: 'id-2',
    name: 'Hermione Kline',
    number: '+380934597486',
    choosen: false,
    blocked: false,
  },
  {
    id: 'id-3',
    name: 'Eden Clements',
    number: '+380934512377',
    choosen: false,
    blocked: true,
  },
  {
    id: 'id-4',
    name: 'Annie Copeland',
    number: '+380937891222',
    choosen: false,
    blocked: false,
  },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: contactsInitialState },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
            choosen: false,
            blocked: false,
          },
        };
      },
    },

    deleteContact(state, action) {
      const index = state.items.findIndex(
        contact => contact.id === action.payload
      );
      state.items.splice(index, 1);
    },

    toggleChoosen(state, action) {
      for (const contact of state.items) {
        if (contact.id === action.payload) {
          contact.choosen = !contact.choosen;
          break;
        }
      }
    },

    toggleBlocked(state, action) {
      for (const contact of state.items) {
        if (contact.id === action.payload) {
          contact.blocked = !contact.blocked;
          break;
        }
      }
    },

    deleteAllBlocked(state) {
      return { items: state.items.filter(contact => !contact.blocked) };
    },
  },
});

export const {
  addContact,
  deleteContact,
  toggleChoosen,
  toggleBlocked,
  deleteAllBlocked,
} = contactsSlice.actions;
export default contactsSlice.reducer;
