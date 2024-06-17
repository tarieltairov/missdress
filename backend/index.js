const express = require("express");
const mongoose = require("mongoose");
const orderRoute = require("./routes/order.route");
const app = express();
const cors = require("cors");

const dbToken =
  "mongodb+srv://tattybubutalantbekova:WDalkCpMpj8mIxvg@missdress.zfdarm6.mongodb.net/?retryWrites=true&w=majority&appName=Missdress";

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use("/api/orders", orderRoute);

mongoose
  .connect(dbToken)
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("server running on 3000 port");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
