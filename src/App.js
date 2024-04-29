import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import BookContext from "./components/context";
import "./index.css";
import LoginAndRegister from "./components/LoginAndRegister";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const [bookCartList, setBookCartList] = useState([]);
  const [isDrakModeTrue, setIsDrakModeTrue] = useState(false);

  const increaseBtn = (id) => {
    setBookCartList((privews) => [
      ...privews.map((eachValue) => {
        if (eachValue.id === id) {
          return { ...eachValue, quantity: eachValue.quantity + 1 };
        }
        return eachValue;
      }),
    ]);
  };
  const decreaseBtn = (id) => {
    setBookCartList((privews) => [
      ...privews.map((eachValue) => {
        if (eachValue.id === id) {
          return { ...eachValue, quantity: eachValue.quantity - 1 };
        }
        return eachValue;
      }),
    ]);
  };

  const deleteBtn = (id) => {
    setBookCartList((privews) => [
      ...privews.filter((eachValue) => eachValue.id !== id),
    ]);
  };

  const addCartBtn = (data) => {
    setBookCartList((privews) => [...privews, data]);
  };

  const clickThemBtn = () => {
    setIsDrakModeTrue((privews) => !privews);
  };

  return (
    <BookContext.Provider
      value={{
        bookCartList,
        isDrakModeTrue,
        increaseBtn: increaseBtn,
        decreaseBtn: decreaseBtn,
        deleteBtn: deleteBtn,
        addCartBtn: addCartBtn,
        clickThemBtn: clickThemBtn,
      }}
    >
      <Switch>
        <Route exact path="/login" component={LoginAndRegister} />
        <ProtectedRoute exact path="/" component={Home} />
      </Switch>
    </BookContext.Provider>
  );
};

export default App;
