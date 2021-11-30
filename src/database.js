const mongoose = require("mongoose");

const conectarDB = async () => {
  await mongoose
    .connect("mongodb://mongo/mydatabase")
    .then((db) => console.log("db is conected to", db.connection.host))
    .catch((err) => console.err(err));
};

module.exports = conectarDB;
