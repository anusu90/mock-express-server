var express = require("express");
var router = express.Router();

const max = 100;

var sampleResponse = {
  inital_sales: 133,
  initial_sales_amount: 224618,
  upsells_amount: 2189,
  upsells: 59,
  active_subs: 430,
  active_subs_amout: 75320,
  email_sent: 12890,
  features: [
    "active_subs",
    "active_subs_amout",
    "email_sent",
    "inital_sales",
    "initial_sales_amount",
    "upsells",
    "upsells_amount",
  ],
  time_series_data: [
    {
      date: "2021-11-05",
      initial_sales_amount: Math.floor(Math.random() * max),
      inital_sales: Math.floor(Math.random() * max),
      upsells_amount: Math.floor(Math.random() * max),
      upsells: Math.floor(Math.random() * max),
      active_subs_amout: Math.floor(Math.random() * max),
      active_subs: Math.floor(Math.random() * max),
      email_sent: Math.floor(Math.random() * max),
    },
    {
      date: "2021-11-06",
      initial_sales_amount: Math.floor(Math.random() * max),
      inital_sales: Math.floor(Math.random() * max),
      upsells_amount: Math.floor(Math.random() * max),
      upsells: Math.floor(Math.random() * max),
      active_subs_amout: Math.floor(Math.random() * max),
      active_subs: Math.floor(Math.random() * max),
      email_sent: Math.floor(Math.random() * max),
    },
    {
      date: "2021-11-07",
      initial_sales_amount: Math.floor(Math.random() * max),
      inital_sales: Math.floor(Math.random() * max),
      upsells_amount: Math.floor(Math.random() * max),
      upsells: Math.floor(Math.random() * max),
      active_subs_amout: Math.floor(Math.random() * max),
      active_subs: Math.floor(Math.random() * max),
      email_sent: Math.floor(Math.random() * max),
    },
    {
      date: "2021-11-08",
      initial_sales_amount: Math.floor(Math.random() * max),
      inital_sales: Math.floor(Math.random() * max),
      upsells_amount: Math.floor(Math.random() * max),
      upsells: Math.floor(Math.random() * max),
      active_subs_amout: Math.floor(Math.random() * max),
      active_subs: Math.floor(Math.random() * max),
      email_sent: Math.floor(Math.random() * max),
    },
    {
      date: "2021-11-09",
      initial_sales_amount: Math.floor(Math.random() * max),
      inital_sales: Math.floor(Math.random() * max),
      upsells_amount: Math.floor(Math.random() * max),
      upsells: Math.floor(Math.random() * max),
      active_subs_amout: Math.floor(Math.random() * max),
      active_subs: Math.floor(Math.random() * max),
      email_sent: Math.floor(Math.random() * max),
    },
    {
      date: "2021-11-10",
      initial_sales_amount: Math.floor(Math.random() * max),
      inital_sales: Math.floor(Math.random() * max),
      upsells_amount: Math.floor(Math.random() * max),
      upsells: Math.floor(Math.random() * max),
      active_subs_amout: Math.floor(Math.random() * max),
      active_subs: Math.floor(Math.random() * max),
      email_sent: Math.floor(Math.random() * max),
    },
  ],
  aff_breakdown_upsells: [
    {
      name: "aff1",
      value: Math.floor(Math.random() * max),
    },
    {
      name: "aff2",
      value: Math.floor(Math.random() * max),
    },
    {
      name: "aff3",
      value: Math.floor(Math.random() * max),
    },
    {
      name: "aff4",
      value: Math.floor(Math.random() * max),
    },
    {
      name: "aff5",
      value: Math.floor(Math.random() * max),
    },
  ],
  aff_breakdown_initial_sales: [
    {
      name: "aff1",
      value: Math.floor(Math.random() * max),
    },
    {
      name: "aff2",
      value: Math.floor(Math.random() * max),
    },
    {
      name: "aff3",
      value: Math.floor(Math.random() * max),
    },
    {
      name: "aff4",
      value: Math.floor(Math.random() * max),
    },
    {
      name: "aff5",
      value: Math.floor(Math.random() * max),
    },
  ],
  aff_breakdown_active_subs: [
    {
      name: "aff1",
      value: Math.floor(Math.random() * max),
    },
    {
      name: "aff2",
      value: Math.floor(Math.random() * max),
    },
    {
      name: "aff3",
      value: Math.floor(Math.random() * max),
    },
    {
      name: "aff4",
      value: Math.floor(Math.random() * max),
    },
    {
      name: "aff5",
      value: Math.floor(Math.random() * max),
    },
  ],
  total_sales_card: {
    initial_sale: 133,
    initial_sale_amount: 24618,
    upsells: 59,
    upsells_amount: 2189,
  },
};

router.get("/", function (req, res, next) {
  console.log(req.query);
  res.send(sampleResponse);
});

module.exports = router;
