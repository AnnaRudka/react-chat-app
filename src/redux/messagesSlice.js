import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

let initialState = [
  {
    id: 1,
    conversation: [
      {
        messageId: uuidv4(),
        contactid: 0,
        text: "Hi, Alice)",
        date: "01.10.2021",
        time: "21:49:32",
      },
      {
        messageId: uuidv4(),
        contactid: 1,
        text: "Hello! So how’s your learning going, Anna?",
        date: "01.10.2021",
        time: "21:50:12",
      },
      {
        messageId: uuidv4(),
        contactid: 0,
        text: "Couldn’t be better!Thanks for asking, Alice)",
        date: "01.10.2021",
        time: "21:52:00",
      },
    ],
  },
  {
    id: 2,
    conversation: [
      {
        messageId: uuidv4(),
        contactid: 2,
        text: "Anna, have you finished the task?",
        date: "08.10.2021",
        time: "14:49:00",
      },
      {
        messageId: uuidv4(),
        contactid: 0,
        text: "Yes, I have already created a pool request. He is waiting for approval)",
        date: "08.10.2021",
        time: "14:50:10",
      },
      {
        messageId: uuidv4(),
        contactid: 2,
        text: "You are rock!",
        date: "08.10.2021",
        time: "14:51:00",
      },
    ],
  },
  {
    id: 3,
    conversation: [],
  },
  {
    id: 4,
    conversation: [],
  },
  {
    id: 5,
    conversation: [],
  },
  {
    id: 6,
    conversation: [],
  },
];

const reduxState = JSON.parse(localStorage.getItem("reduxState"));

if (reduxState) initialState = reduxState.messages || initialState;

export const slice = createSlice({
  name: "messages",
  initialState: initialState,
  reducers: {
    addMessages: (state, action) => {
      state.map((item) => {
        return item.id === Number(action.payload.id)
          ? item.conversation.push(action.payload)
          : item;
      });
      return state;
    },
  },
});

export const { addMessages } = slice.actions;

export const selectMessages = (state) => state.messages;

export default slice.reducer;
