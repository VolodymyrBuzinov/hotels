// import { Route, Redirect } from "react-router-dom";
// import { useSelector } from "react-redux";
// import authSelectors from "../redux/auth/authSelectors/authSelectors";

// export default function PrivateRoute({ children, redirectTo, ...routeProps }) {
//   const isLoggedIn = useSelector(authSelectors.getAuth);
//   return (
//     <Route {...routeProps}>
//       {isLoggedIn ? children : <Redirect to={redirectTo} />}
//     </Route>
//   );
// }


import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getIsAutheticated } from '../../redux/Auth/authSelectors';

function PrivateRoute({
  children,
  redirectTo = '/',
  ...routeProps
}) {
  const isLoggedIn = useSelector(getIsAutheticated);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}

export default PrivateRoute;