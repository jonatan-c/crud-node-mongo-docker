const express = require("express");
const app = express();
const conectarDB = require("./database");
// const cors = require("cors");

const crudRoutes = require("./routes/index.routes");
conectarDB();
// app.use(cors());
app.use(express.json());

// require("./database");
//a
app.use(crudRoutes);
//asdsad
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
//asdsad
