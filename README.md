## Fetching data with Axios

- Fetching product data

  > File product for customer : `client/src/pages/Product.js`

  > File product for admin : `client/src/pages/ProductAdmin.js`

  Get API config :

  ```javascript
  import { API } from "../config/api";
  ```

  Use useState for store data :

  ```javascript
  const [products, setProducts] = useState([]);
  ```

  Fetching product data process :

  ```javascript
  ...
  // Fetching product data from database
  const getProducts = async () => {
    try {
      const response = await API.get("/products");
      // Store product data to useState variabel
      setProducts(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  ...
  ```

* Fetching detail product data

  > File : `client/src/pages/DetailProduct.js`

* Fetching profile data

  > File : `client/src/pages/Profile.js`

* Fetching transaction data

  > File : `client/src/pages/Profile.js`

* Fetching category data

  > File : `client/src/pages/CategoryAdmin.js`

* Insert transaction (buy)

  > File : `client/src/pages/DetailProduct.js`

  Get API config :

  ```javascript
  import { API } from "../config/api";
  ```

  `We get product data from fetching product data process`

  Handle buy process & insert transaction data to database :

  ```javascript
  const handleBuy = async (e) => {
    try {
      e.preventDefault();

      // Configuration
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      // Get data from product
      const data = {
        idProduct: product.id,
        idSeller: product.user.id,
        price: product.price,
      };

      // Data body
      const body = JSON.stringify(data);

      // Insert transaction data
      await API.post("/transaction", body, config);

      history.push("/profile");
    } catch (error) {
      console.log(error);
    }
  };
  ```
