const app = require("./app");
const mongoose = require("mongoose");

const DB_HOST =
  "mongodb+srv://STIg:lZUh1z3QOY3t6vH4@cluster0.nvncyjk.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
