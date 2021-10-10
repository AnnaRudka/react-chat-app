import { createSlice } from '@reduxjs/toolkit';
import ALICE from '../assets/alice.jpg';
import JOSEFINA from '../assets/josefina.jpg';
import VELAZ from '../assets/velaz.jpg';
import VASYL from '../assets/vasyl.jpg';
import UNKNOWN from '../assets/unknown.png';

let initialState = [
  {
    id: 1,
    firstName: 'Alice',
    lastName: 'Freeman',
    photo: ALICE,
  },
  {
    id: 2,
    firstName: 'Josefina',
    lastName: '',
    photo: JOSEFINA,
  },
  {
    id: 3,
    firstName: 'Velaz',
    lastName: 'Quez',
    photo: VELAZ,
  },
  {
    id: 4,
    firstName: 'Olya',
    lastName: 'Lomaga',
    photo: UNKNOWN,
  },
  {
    id: 5,
    firstName: 'Gabriel',
    lastName: 'Mel',
    photo: UNKNOWN,
  },
  {
    id: 6,
    firstName: 'Vasyl',
    lastName: 'Motyl',
    photo: VASYL,
  },
];

const reduxState = JSON.parse(localStorage.getItem('reduxState'));

if (reduxState) initialState = reduxState.contacts || initialState;

export const slice = createSlice({
  name: 'contacts',
  initialState: initialState,
});

export const { addContact, deleteContact } = slice.actions;

export const selectContacts = state => state.contacts;

export default slice.reducer;
