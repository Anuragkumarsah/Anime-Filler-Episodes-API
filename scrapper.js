// const puppeteer = require("puppeteer");
import puppeteer from "puppeteer";
export const scrapeList = async (url) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  const elements = await page.$$(".filler > .Episodes");
  //   elements.map((ele) => {
  //     console.log(ele.jsonValue());
  //   });
  //   let ep = await page.evaluate(
  //     () => document.querySelector(".Episodes").innerText
  //   );
  let ep = await (await elements[0].getProperty("textContent")).jsonValue();
  // let ep = await elements.getProperty("textContent").jsonValue();
  browser.close();
  return { filler: ep };
};
