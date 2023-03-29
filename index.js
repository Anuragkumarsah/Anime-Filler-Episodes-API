import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();
app.use(cors());
app.use(bodyParser.json());
const port = process.env.PORT || 3000;

import { scrapeList } from "./scrapper.js";

app.get("/", (req, res) => {
  res.send("Please head to /fillers?id=value to get the filler list");
});

app.get("/filler", async (req, res) => {
  const { id } = req.query;
  const url = `https://www.animefillerlist.com/shows/${id}`;
  const list = await scrapeList(url);
  res.send(list);
});

app.listen(port);
