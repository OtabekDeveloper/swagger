const express = require("express");
const router = express.Router();

const expenseRouter = require('./contact/expense.router')

router.use('/contact', expenseRouter);

module.exports = router;
