const express = require("express");

const router = express.Router();

// Controller
const {
  addUsers,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/user");
const {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
} = require("../controllers/product");
const {
  getTransactions,
  addTransaction,
} = require("../controllers/transaction");
const {
  getCategories,
  addCategory,
  updateCategory,
  getCategory,
} = require("../controllers/category");
const { getProfile } = require("../controllers/profile");
const { register, login, checkAuth } = require("../controllers/auth");

// Middleware
const { auth } = require("../middlewares/auth");
const { uploadFile } = require("../middlewares/uploadFile");

// Route
router.post("/user", addUsers);
router.get("/users", getUsers);
router.get("/user/:id", getUser);
router.patch("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

router.get("/profile", auth, getProfile);

router.get("/products", auth, getProducts);
router.get("/product/:id", auth, getProduct);
router.post("/product", auth, uploadFile("image"), addProduct);
router.patch("/product/:id", auth, uploadFile("image"), updateProduct);

router.get("/transactions", auth, getTransactions);
router.post("/transaction", auth, addTransaction);

router.get("/categories", getCategories);
router.get("/category/:id", getCategory);
router.post("/category", addCategory);
router.patch("/category/:id", updateCategory);

router.post("/register", register);
router.post("/login", login);
router.get("/check-auth", auth, checkAuth);

module.exports = router;
