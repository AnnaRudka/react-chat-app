import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
//import ALICE from "../assets/anna_photo1.jpg";
import ALICE from "../assets/alice.jpg";
import JOSEFINA from "../assets/josefina.jpg";
import UNKNOWN from "../assets/unknown.png";

let initialState = [
  {
    id: 1,
    firstName: "Alice",
    lastName: "Freeman",
    photo: ALICE,
    active: true,
  },
  {
    id: 2,
    firstName: "Josefina",
    lastName: "",
    photo: JOSEFINA,
    active: true,
  },
  {
    id: 3,
    firstName: "Velaz",
    lastName: "Quez",
    photo: UNKNOWN,
    active: true,
  },
  {
    id: 4,
    firstName: "Olya",
    lastName: "Matviyiv",
    photo: UNKNOWN,
    active: true,
  },
  {
    id: 5,
    firstName: "Gabriel",
    lastName: "Mel",
    photo: UNKNOWN,
    active: true,
  },
  {
    id: 6,
    firstName: "Vasyl",
    lastName: "Magometa",
    photo: UNKNOWN,
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
