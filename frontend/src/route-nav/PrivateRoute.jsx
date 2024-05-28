import React, { useContext } from "react";
import { Route } from "react-router-dom";
import {UserContext} from "../auth/UserContext";

/** "Higher-Order Component" for private routes.
 *
 * Checks for logined user or redirects to login form. 
 */

function PrivateRoute({ element, ...rest }) {
  const { currentUser } = useContext(UserContext);

  console.debug(
      "PrivateRoute",
      "rest=", rest,
      "currentUser=", currentUser,
  );


  return (
      <Route 
      {...rest}
      element={currentUser ? element : <Navigate to="/login" replace />}
    />
  );
}

export default PrivateRoute;