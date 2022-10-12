// const puppeteer = require("puppeteer");
import puppeteer from "puppeteer";
export const scrapeList = async (url) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  const elements = await page.$$(".filler > .Episodes");
  let ep = await (await elements[0].getProperty("textContent")).jsonValue();
  browser.close();
  return { filler: ep };
};
