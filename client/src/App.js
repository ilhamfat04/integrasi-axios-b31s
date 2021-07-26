import { useContext, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { UserContext } from "./context/userContext";

import Auth from "./pages/Auth";
import Product from "./pages/Product";
import DetailProduct from "./pages/DetailProduct";
import Complain from "./pages/Complain";
import Profile from "./pages/Profile";
import ComplainAdmin from "./pages/ComplainAdmin";
import CategoryAdmin from "./pages/CategoryAdmin";
import ProductAdmin from "./pages/ProductAdmin";
import UpdateCategoryAdmin from "./pages/UpdateCategoryAdmin";
import AddCategoryAdmin from "./pages/AddCategoryAdmin";
import AddProductAdmin from "./pages/AddProductAdmin";
import UpdateProductAdmin from "./pages/UpdateProductAdmin";

import { API, setAuthToken } from "./config/api";

// init token on axios every time the app is refreshed
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  let history = useHistory();
  const [state, dispatch] = useContext(UserContext);
  console.clear();
  console.log(state);
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    // Redirect Auth
    if (state.isLogin === false) {
      history.push("/auth");
    } else {
      if (state.user.status === "admin") {
        history.push("/product-admin");
      } else if (state.user.status === "customer") {
        history.push("/");
      }
    }
  }, [state]);

  const checkUser = async () => {
    try {
      const response = await API.get("/check-auth");

      // If the token incorrect
      if (response.status === 404) {
        return dispatch({
          type: "AUTH_ERROR",
        });
      }

      // Get user data
      let payload = response.data.data.user;
      // Get token from local storage
      payload.token = localStorage.token;

      // Send data to useContext
      dispatch({
        type: "USER_SUCCESS",
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <Switch>
      <Route exact path="/" component={Product} />
      <Route path="/auth" component={Auth} />
      <Route path="/product/:id" component={DetailProduct} />
      <Route path="/complain" component={Complain} />
      <Route path="/profile" component={Profile} />
      <Route path="/complain-admin" component={ComplainAdmin} />
      <Route path="/category-admin" component={CategoryAdmin} />
      <Route path="/update-category/:id" component={UpdateCategoryAdmin} />
      <Route path="/add-category" component={AddCategoryAdmin} />
      <Route path="/product-admin" component={ProductAdmin} />
      <Route path="/add-product" component={AddProductAdmin} />
      <Route path="/update-product/:id" component={UpdateProductAdmin} />
    </Switch>
  );
}

export default App;
