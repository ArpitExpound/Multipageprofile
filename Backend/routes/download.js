const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

router.get('/employee', (req, res) => {
  const filePath = path.join(__dirname, '../Employee.csv');
  res.download(filePath, 'Employee.csv');
});

router.get('/dept', (req, res) => {
  const filePath = path.join(__dirname, '../Dept.csv');
  res.download(filePath, 'Dept.csv');
});

module.exports = router;
