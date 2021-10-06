import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

let initialState = [
  {
    id: uuidv4(),
    idFrom: 0,
    text: "Hi, Alice)",
    date: "01.10.2021",
  },
  {
    id: uuidv4(),
    idFrom: 1,
    text: "Hello! So how’s your learning going, Anna?",
    date: "01.10.2021",
  },
  {
    id: uuidv4(),
    idFrom: 1,
    text: "Couldn’t be better!Thanks for asking, Alice)",
    date: "01.10.2021",
  },
];

const reduxState = JSON.parse(localStorage.getItem("reduxState"));

if (reduxState) initialState = reduxState.messages || initialState;

export const slice = createSlice({
  name: "messages",
  initialState: initialState,
  reducers: {
    addMessages: (state, action) => {
      state.push({ ...action.payload, id: uuidv4() });
      return state;
    },
  },
});

export const { addMessages } = slice.actions;

export const selectMessages = (state) => state.messages;

export default slice.reducer;
