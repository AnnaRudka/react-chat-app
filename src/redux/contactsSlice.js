import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import ALICE from "../assets/anna_photo1.jpg";

let initialState = [
  {
    id: 1,
    firstName: "Alice",
    lastName: "Freeman",
    lastDate: "01.10.2021",
    photo: ALICE,
    lastMessageID: "1",
    active: true,
  },
  {
    id: 2,
    firstName: "Josefina",
    lastName: "",
    lastDate: "15.09.2021",
    photo: ALICE,
    lastMessageID: "1",
    active: true,
  },
  {
    id: 3,
    firstName: "Velaz",
    lastName: "Quez",
    lastDate: "29.08.2021",
    photo: ALICE,
    lastMessageID: "1",
    active: true,
  },
  {
    id: 4,
    firstName: "Olya",
    lastName: "Matviyiv",
    lastDate: "",
    photo: ALICE,
    lastMessageID: "1",
    active: true,
  },
  {
    id: 5,
    firstName: "Gabriel",
    lastName: "Mel",
    lastDate: "14.08.2021",
    photo: ALICE,
    lastMessageID: "1",
    active: true,
  },
  {
    id: 6,
    firstName: "Vasyl",
    lastName: "Magometa",
    lastDate: "11.10.2021",
    photo: ALICE,
    lastMessageID: "1",
    active: true,
  },
];

const reduxState = JSON.parse(localStorage.getItem("reduxState"));

if (reduxState) initialState = reduxState.contacts || initialState;

export const slice = createSlice({
  name: "contacts",
  initialState: initialState,
  reducers: {
    addContact: (state, action) => {
      state.push({ ...action.payload, id: uuidv4() });
      return state;
    },
    deleteContact: (state, action) => {
      state.splice(
        state.findIndex((item) => item.id === action.payload.id),
        1
      );
      return state;
    },
  },
});

export const { addContact, deleteContact } = slice.actions;

export const selectContacts = (state) => state.contacts;

export default slice.reducer;
