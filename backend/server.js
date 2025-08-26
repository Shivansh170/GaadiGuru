const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const routes = require("./routes/routes");
const connectDB = require("./config/db");
const app = express();
dotenv.config();
connectDB();
app.use(cors());
app.use("/api", routes);

app.use(express.json());
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
