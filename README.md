# Axios

A promise based HTTP client for the browser and Node.js

## Insert data with Axios

- Insert data to register account `client/src/components/auth/Register.js`

  Get API config :

  ```javascript
  import { API } from "../../config/api";
  ```

  Example script insert data with axios :

  ```javascript
  ...
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  const body = JSON.stringify(form);

  const response = await API.post("/register", body, config);
  ...
  ```

- Insert data for login process `client/src/components/auth/Login.js`

- Insert data for transaction (buy product) `client/src/components/...`

- Insert product data `client/src/components/...`

- Insert category data `client/src/components/...`
