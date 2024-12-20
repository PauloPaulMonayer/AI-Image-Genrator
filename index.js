const path = require("path");
const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();

const cors = require("cors");

// אפשר CORS עבור כל המקורות
app.use(cors());

// Enable body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set static folder
app.use("/openai", require("./routes/openaiRoutes.js"));
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => console.log(`Server started on port ${port}`));
