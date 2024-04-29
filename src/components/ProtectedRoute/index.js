import { Redirect, Route } from "react-router-dom";

import Cookies from "js-cookie";

const ProtectedRoute = (props) => {
  const JwtToken = Cookies.get("jwt_token");
  console.log(JwtToken);
  if (JwtToken === undefined) {
    return <Redirect to="/login" />;
  }
  return <Route {...props} />;
};

export default ProtectedRoute;
