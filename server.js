const app = require("express")();

const bodyParser = require("body-parser");

app.use(bodyParser.json());

const sequelize = require("./database");
const Product = require("./models/product");
const User = require("./models/user");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use("/admin", adminRoutes);
// app.use(shopRoutes);
User.hasMany(Product);
// sequelize.drop()
sequelize
  .sync()
  .then((result) => {
    // console.log(result);
    app.listen(3000, () => console.log("Server is up and running"));
  })
  .catch((err) => {
    console.log(err);
  });
