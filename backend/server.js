const express = require("express");
const dotenv = require("dotenv");
const routes = require("./routes/routes");
const connectDB = require("./config/db");
const app = express();
dotenv.config();
connectDB();
app.use("/api/brands", routes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
