const fs = require("fs");
const path = require("path");
const { stringify } = require("querystring");

const loadProducts = () => {
  return JSON.parse(
    fs.readFileSync(path.join(__dirname, "./productsDataBase.json"), "utf-8")
  );
};
const storeProducts = (products) => {
  fs.writeFileSync(path.join(__dirname, "./productsDataBase.json"),JSON.stringify(products), "utf-8")
};



module.exports = {
    loadProducts,
    storeProducts
}
