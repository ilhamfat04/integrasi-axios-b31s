## Delete data with Axios

- Delete product data

  > File : `client/src/pages/ProductAdmin.js`

  Get API config :

  ```javascript
  // API config
  import { API } from "../config/api";
  ```

  Variabel for delete product data :

  ```javascript
  // Variabel for delete product data
  const [idDelete, setIdDelete] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(null);
  ```

  Modal Confirm delete data :

  ```javascript
  // Modal Confirm delete data
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setS;
  ```

  Get id product & show modal confirm delete data :

  ```javascript
  // For get id product & show modal confirm delete data
  const handleDelete = (id) => {
    setIdDelete(id);
    handleShow();
  };
  ```

  If confirm is true, execute delete data :

  ```javascript
  // If confirm is true, execute delete data
  const deleteById = async (id) => {
    try {
      await API.delete(`/product/${id}`);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };
  ```

  Close modal and execute delete data :

  ```javascript
  useEffect(() => {
    if (confirmDelete) {
      // Close modal confirm delete data
      handleClose();
      // execute delete data by id function
      deleteById(idDelete);
      setConfirmDelete(null);
    }
  }, [confirmDelete]);
  ```

- Delete category data

  > File : `client/src/pages/UpdateCategoryAdmin.js`

  Get API config :

  ```javascript
  // API config
  import { API } from "../config/api";
  ```

  Variabel for delete category data :

  ```javascript
  // Variabel for delete category data
  const [idDelete, setIdDelete] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(null);
  ```

  Modal Confirm delete data :

  ```javascript
  // Modal Confirm delete data
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  ```

  Get id category & show modal confirm delete data :

  ```javascript
  // For get id category & show modal confirm delete data
  const handleDelete = (id) => {
    setIdDelete(id);
    handleShow();
  };
  ```

  If confirm is true, execute delete data :

  ```javascript
  // If confirm is true, execute delete data
  const deleteById = async (id) => {
    try {
      await API.delete(`/category/${id}`);
      getCategories();
    } catch (error) {
      console.log(error);
    }
  };
  ```

  Close modal and execute delete data :

  ```javascript
  useEffect(() => {
    if (confirmDelete) {
      // Close modal confirm delete data
      handleClose();
      // execute delete data by id function
      deleteById(idDelete);
      setConfirmDelete(null);
    }
  }, [confirmDelete]);
  ```
