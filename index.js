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

app.post("/filler", async (req, res) => {
  const { id } = await req.query;
  const url = `https://www.animefillerlist.com/shows/${id}`;
  //   console.log(id);
  const list = await scrapeList(url);
  res.send(list);
});

app.listen(port);
