require("dotenv").config();
const express = require("express");
const app = express();

const handoutDB = require("./schema/handout.db");

const PORT = process.env.PORT || 5001;

app.get("/api/faculties", function (req, res) {
  handoutDB.connect().getConnection(function (err, connection) {
    if (err) throw err;
    let sql = "SELECT * FROM faculties;";
    connection.query(sql, (query_err, data) => {
      connection.release();

      if (query_err) throw query_err;

      res.send(data);
    });
  });
});

app.get("/api/departments", function (req, res) {
  handoutDB.connect().getConnection(function (err, connection) {
    if (err) throw err;
    let sql = "SELECT * FROM departments;";
    connection.query(sql, (query_err, data) => {
      connection.release();

      if (query_err) throw query_err;

      res.send(data);
    });
  });
});

app.listen(PORT, function () {
  console.log("handout server running");
});
