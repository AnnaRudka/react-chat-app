import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./redux/contactsSlice";
import messagesReducer from "./redux/messagesSlice";

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    messages: messagesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export default store;
