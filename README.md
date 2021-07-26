## Update data with Axios

- Update product data

  > File : `client/src/pages/UpdateProductAdmin.js`

  Get API config :

  ```javascript
  import { API } from "../config/api";
  ```

  Store data on useState :

  ```javascript
  const [categories, setCategories] = useState([]); //Store all category data
  const [categoryId, setCategoryId] = useState([]); //Save the selected category id
  const [preview, setPreview] = useState(null); //For image preview
  const [product, setProduct] = useState({}); //Store product data
  const [form, setForm] = useState({
    image: "",
    name: "",
    desc: "",
    price: "",
    qty: "",
  }); //Store product data
  ```

  Fetching product detail and categpry data :

  ```javascript
  // Fetching detail product data by id from database
  const getProduct = async (id) => {
    try {
      const response = await API.get("/product/" + id);
      // Store product data to useState variabel
      setPreview(response.data.data.image);
      setForm({
        ...form,
        name: response.data.data.name,
        desc: response.data.data.desc,
        price: response.data.data.price,
        qty: response.data.data.qty,
      });
      setProduct(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Fetching category data
  const getCategories = async () => {
    try {
      const response = await API.get("/categories");
      setCategories(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
    getProduct(id);
  }, []);
  ```

  Handle if category selected :

  ```javascript
  // For handle if category selected
  const handleChangeCategoryId = (e) => {
    const id = e.target.value;
    const checked = e.target.checked;

    if (checked == true) {
      // Save category id if checked
      setCategoryId([...categoryId, parseInt(id)]);
    } else {
      // Delete category id from variable if unchecked
      let newCategoryId = categoryId.filter((categoryIdItem) => {
        return categoryIdItem != id;
      });
      setCategoryId(newCategoryId);
    }
  };
  ```

  Handle change data on form

  ```javascript
  // Handle change data on form
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });

    // Create image url for preview
    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };
  ```

  Handle submit data :

  ```javascript
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      // Configuration
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };

      // Store data with FormData as object
      const formData = new FormData();
      if (form.image) {
        formData.set("image", form?.image[0], form?.image[0]?.name);
      }
      formData.set("name", form.name);
      formData.set("desc", form.desc);
      formData.set("price", form.price);
      formData.set("qty", form.qty);
      formData.set("categoryId", categoryId);

      // Insert product data
      const response = await API.patch(
        "/product/" + product.id,
        formData,
        config
      );
      console.log(response.data);

      history.push("/product-admin");
    } catch (error) {
      console.log(error);
    }
  };
  ```

- Update category data

  > File : `client/src/pages/UpdateCategoryAdmin.js`

  Get API config :

  ```javascript
  import { API } from "../config/api";
  ```

  Use useState for store data :

  ```javascript
  const [category, setCategory] = useState({ name: "" });
  ```

  Fething category data by id :

  ```javascript
  // Fetching category data by id from database
  const getCategory = async (id) => {
    try {
      const response = await API.get("/category/" + id);
      // Store product data to useState variabel
      setCategory({ name: response.data.data.name });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategory(id);
  }, []);
  ```

  Handle submit data :

  ```javascript
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      // Configuration
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      // Data body
      const body = JSON.stringify(category);

      // Insert category data
      const response = await API.patch("/category/" + id, body, config);

      console.log(response.data);

      history.push("/category-admin");
    } catch (error) {
      console.log(error);
    }
  };
  ```
