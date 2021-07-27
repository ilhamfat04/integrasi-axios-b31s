import { useContext, useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { UserContext } from "./context/userContext";

import Auth from "./pages/Auth";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Complain from "./pages/Complain";
import Profile from "./pages/Profile";
import ComplainAdmin from "./pages/ComplainAdmin";
import CategoryAdmin from "./pages/CategoryAdmin";
import ProductAdmin from "./pages/ProductAdmin";
import EditCategoryAdmin from "./pages/EditCategoryAdmin";
import AddCategoryAdmin from "./pages/AddCategoryAdmin";
import AddProductAdmin from "./pages/AddProductAdmin";
import EditProductAdmin from "./pages/EditProductAdmin";

// Get API config & setAuthToken here ...

// Init token on axios every time the app is refreshed here ...

function App() {
  let history = useHistory();
  
  // Init user context here ...

  // Redirect Auth here ...

  // Create function for check user token here ...

  // Call function check user with useEffect didMount here ...

  return (
    <Switch>
      <Route exact path="/" component={Shop} />
      <Route path="/auth" component={Auth} />
      <Route path="/product/:id" component={Product} />
      <Route path="/complain" component={Complain} />
      <Route path="/profile" component={Profile} />
      <Route path="/complain-admin" component={ComplainAdmin} />
      <Route path="/category-admin" component={CategoryAdmin} />
      <Route path="/edit-category/:id" component={EditCategoryAdmin} />
      <Route path="/add-category" component={AddCategoryAdmin} />
      <Route path="/product-admin" component={ProductAdmin} />
      <Route path="/add-product" component={AddProductAdmin} />
      <Route path="/edit-product/:id" component={EditProductAdmin} />
    </Switch>
  );
}

export default App;
