const express = require("express");
const router = express.Router();
const {
  getOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
} = require("../controllers/order.controller.js");

router.get("/", getOrders);
router.get("/:id", getOrder);

router.post("/", createOrder);

// update a order
router.put("/:id", updateOrder);

// delete a order
router.delete("/:id", deleteOrder);

module.exports = router;
