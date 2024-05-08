const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  const { SYMBOL, NAME_OF_COMPANY,CATEGORY, sort, select } = req.query;
  console.log("🚀 ~ file: products.js ~ line 5 ~ getAllProducts ~ sort", sort);
  const queryObject = {};

  if (SYMBOL) {
    queryObject.SYMBOL ={ $regex: SYMBOL, $options: "i" };
  }

  if (NAME_OF_COMPANY) {
    queryObject.NAME_OF_COMPANY = { $regex: NAME_OF_COMPANY, $options: "i" } ;
  }

  let apiData = Product.find(queryObject);

  if (sort) {
    let sortFix = sort.split(",").join(" ");
    apiData = apiData.sort(sortFix);
  }

  // (select = name company;
  if (select) {
    // let selectFix = select.replace(",", " ");
    let selectFix = select.split(",").join(" ");
    apiData = apiData.select(selectFix);
  }

  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 10;

  let skip = (page - 1) * limit;

  // page = 2;
  // limit = 3;
  // skip =  1 * 3 = 3

  apiData = apiData.skip(skip).limit(limit);

  console.log(queryObject);

  const myData = await apiData;
  res.status(200).json({ myData, nbHits: myData.length });
};

const getAllProductsTesting = async (req, res) => {
  console.log(req.query);
  const myData = await Product.find(req.query).skip(2);
  // sort = name,price;

  res.status(200).json({ myData, nbHits: myData.length });
};

module.exports = { getAllProducts, getAllProductsTesting };
