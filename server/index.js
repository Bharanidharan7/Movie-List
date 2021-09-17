const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "ott",
});

app.post("/create", (req, res) => {
  const movieName = req.body.movieName;
  const dateAdded = req.body.dateAdded;
  const language = req.body.language;
  const actor = req.body.actor;
  const director = req.body.director;
  const runtime = req.body.runtime;
  const movieStill = req.body.movieStill;
  db.query(
    "INSERT INTO movies(movieName, dateAdded,language, actor, director, runtime, movieStill) VALUES(?,?,?,?,?,?,?)",
    [movieName, dateAdded, language, actor, director, runtime, movieStill],
    (err, results) => {
      if (err) {
        console.log(err);
      } else {
        console.log(results);
        res.send("values inserted");
      }
    }
  );
});

app.get("/show", (req, res) => {
  const sql = "SELECT * FROM movies";
  db.query(sql, (err, result) => {
    if (err) {
      res.status(200).send(err);
      return;
    }
    if (result.length) res.json(result);
    else res.json({});
  });
});

app.put("/update", (req, res) => {
  const id = req.body.id;
  const movieName = req.body.movieName;
  const dateAdded = req.body.dateAdded;
  const language = req.body.language;
  const actor = req.body.actor;
  const director = req.body.director;
  const runtime = req.body.runtime;
  const movieStill = req.body.movieStill;
  db.query(
    "UPDATE movies SET movieName=?,dateAdded=?,language=?,actor=?,director=?,runtime=?,movieStill=? WHERE id=?",
    [movieName, dateAdded, language, actor, director, runtime, movieStill, id],
    (err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.send("values inserted");
      }
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM movies WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
