import axios from "axios";
import * as cheerio from "cheerio";

async function googleSearch(query) {
  try {
    const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    const res = await axios.get(url, {
      headers: {
        "User-Agent": "Mozilla/5.0",
        "Accept-Language": "en-US,en;q=0.9",
      },
      timeout: 5000,
    });

    const $ = cheerio.load(res.data);
    const links = [];

    $("a").each((_, el) => {
      const href = $(el).attr("href");
      if (href && href.startsWith("/url?q=")) {
        const clean = href.split("/url?q=")[1].split("&")[0];
        if (clean.startsWith("http")) links.push(clean);
      }
    });

    return [...new Set(links)].slice(0, 2);
  } catch {
    return [];
  }
}

async function duckDuckGoSearch(query) {
  const url = `https://duckduckgo.com/html/?q=${encodeURIComponent(query)}`;

  const res = await axios.get(url, {
    headers: {
      "User-Agent": "Mozilla/5.0",
    },
  });

  const $ = cheerio.load(res.data);
  const links = [];

  $("a.result__a").each((_, el) => {
    const href = $(el).attr("href");
    if (href && href.startsWith("http")) links.push(href);
  });

  return links.slice(0, 2);
}

export async function searchWeb(query) {
  let links = await googleSearch(query);
  if (links.length === 0) {
    console.log("Google blocked, falling back to DuckDuckGo");
    links = await duckDuckGoSearch(query);
  }
  return links;
}
