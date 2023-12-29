import express from "express";
import cors from "cors";
import pool from "./db.js";

const app = express();
const port = 3001;

//middleware
app.use(cors());
app.use(express.json());

//Routes
app.get("/", (req, res) => {
  res.send("Hello, this is the server!");
});

//create a new product
app.post("/products", async (req, res) => {
  console.log("Product created");
  try {
    const { title, link, brand, spf, isSafe, unsafe_ing } = req.body;
    const newProduct = await pool.query(
      "INSERT INTO products (title,link,brand,spf,is_safe,prohibited_ingredients) VALUES($1,$2,$3,$4,$5,$6) RETURNING *",
      [title, link, brand, spf, isSafe, unsafe_ing]
    );
    res.json(newProduct.rows[0]);
    console.log(newProduct.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

//get all products
app.get("/products", async (req, res) => {
  console.log("get all products");
  try {
    const allProducts = await pool.query(
      "SELECT * FROM products WHERE status='approved'"
    );
    res.json(allProducts.rows);
  } catch (error) {
    console.error(error.message);
  }
});

//get a product
app.get("/products/:id", async (req, res) => {
  console.log("get a product");
  try {
    const { id } = req.params;
    const product = await pool.query("SELECT * FROM products WHERE id = $1", [
      id,
    ]);
    res.json(product.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

//update a product
app.put("/products/:id", async (req, res) => {
  console.log("update product");
  try {
    const { id } = req.params;
    const { title, link, brand, spf, is_safe, prohibited_ingredients } =
      req.body;
    const updateProduct = await pool.query(
      "UPDATE products SET title=$1,link=$2,brand=$3,spf=$4,is_safe=$5,prohibited_ingredients=$6 WHERE id = $7",
      [title, link, brand, spf, is_safe, prohibited_ingredients, id]
    );

    console.log("product updated");
  } catch (error) {
    console.error(error.message);
  }
});

//get all ingredients
app.get("/ingredients", async (req, res) => {
  console.log("get all ingredients");
  try {
    const allIngredients = await pool.query(
      "SELECT * FROM ingredients WHERE status='approved'"
    );
    res.json(allIngredients.rows);
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
