import axios from "axios";
import * as cheerio from "cheerio";

export async function scrapeArticle(url) {
  try {
    const res = await axios.get(url, {
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
      timeout: 10000,
    });

    const $ = cheerio.load(res.data);

    const content =
      $("article").text() ||
      $("main").text() ||
      $("body").text();

    return content
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 8000);
  } catch (err) {
    console.error("Scrape failed:", url);
    return "";
  }
}
