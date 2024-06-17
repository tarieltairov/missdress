const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  count: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
});

const orderSchema = mongoose.Schema(
  {
    aboutClient: {
      fullName: {
        type: String,
        required: true,
      },
      street: {
        type: String,
        required: true,
      },
      phoneNumber: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
    },
    order: {
      priceWithSale: {
        type: Number,
      },
      products: [productSchema],
      totalPrice: {
        type: Number,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

const OrderModel = mongoose.model("Order", orderSchema);

module.exports = OrderModel;
