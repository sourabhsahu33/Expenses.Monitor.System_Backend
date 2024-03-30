const mongoose = require("mongoose");

const transectionSchema = new mongoose.Schema(
  {
    userid: {
      type : String,
      required: true,
    },
    amount: {
      type: Number,
      required: [true, "amount is required"],
    },
    type:{
      type:String,
      require: [true, "type is required"],
    },
    category: {
      type: String,
      required: [true, "category is required"],
    },
    refrence: {
      type: String,
    },
    description: {
      type: String,
      required: [true, "descr. is required"],
    },
    date: {
      type: Date,
      required: [true, "date is requird"],
    },
  },
  { timestamps: true }
);

const transectionModel = mongoose.model("transection", transectionSchema);

module.exports = transectionModel;
