# Axios

A promise based HTTP client for the browser and Node.js

## Insert data with Axios

Insert data to register account `client/src/components/auth/Register.js`

For example script :

```javascript
const config = {
  headers: {
    "Content-type": "application/json",
  },
};

const body = JSON.stringify(form);

const response = await API.post("/register", body, config);
```
