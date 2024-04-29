import React from "react";
const BookContext = React.createContext({
  bookCartList: [],
  increaseBtn: () => {},
  decreaseBtn: () => {},
  deleteBtn: () => {},
  addCartBtn: () => [],
  isDrakModeTrue: false,
  clickThemBtn: () => {},
});

export default BookContext;
