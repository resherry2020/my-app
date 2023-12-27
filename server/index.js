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

//get all products
app.get("/products", async (req, res) => {
  console.log("get all products");
  try {
    const allProducts = await pool.query("SELECT * FROM products");
    res.json(allProducts.rows);
    console.log(allProducts.rows);
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
