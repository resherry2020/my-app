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
app.post("/products", async (req, res) => {
  try {
    const { userInput } = req.body;
    const result = await pool.query(
      "INSERT INTO user_inputs (content) VALUES ($1) RETURNING *",
      [userInput]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error storing user input:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
