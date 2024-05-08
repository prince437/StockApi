const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  SYMBOL: {
    type: String,
    required: true,
   },
   EXCHANGE_SYMBOL: {
    type: String,
  required: true,
  },
  NAME_OF_COMPANY:{
    type: String,
    required: true,
  },
  SERIES: {type: String,
  required: true},
  DATE_OF_LISTING: {
    type: String,
    required: true,
  },
  PAID_UP_VALUE: {type: String,
    required: true,},
    MARKET_LOT: {
    type: String,
  required: true,
  },
  ISIN_NUMBER : {type: String,
    required: true,},

    FACE_VALUE : {type: Number,
    required: true,},

    CURRENT_PRICE : {type: Number,
    required: true,},
    
    FIFTYTWO_WEEK_HIGH : {type: Number,
    required: true,
  },
  FIFTYTWO_WEEK_LOW:{
    type: Number,
  required: true,
  },
  MARKET_CAP:{
    type: Number,
  required: true,
  },
  CATEGORY:{
    type: String,
  required: true,
  }
});

module.exports = mongoose.model("Product", productSchema);
