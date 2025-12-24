import axios from "axios";
import { searchWeb } from "./google.js";
import { scrapeArticle } from "./scrape.js";
import { rewriteArticle } from "./llm.js";
import { publishArticle } from "./publish.js";

const API_BASE = "http://127.0.0.1:8000/api";

async function run() {
  // 1. Fetch latest article
  const article = (await axios.get(`${API_BASE}/articles/latest`)).data;
  console.log("Latest article:", article.id, article.title);

  // 2. Search competitor articles
  let links = await searchWeb(article.title);
  if (links.length === 0) {
    console.log("Search failed. Using fallback competitors.");
    links = [
      "https://www.ibm.com/topics/chatbots",
      "https://www.salesforce.com/blog/what-is-a-chatbot/",
    ];
  }

  console.log("Competitor links:", links);

  // 3. Scrape competitor content
  const competitorTexts = [];
  for (const link of links) {
    competitorTexts.push(await scrapeArticle(link));
  }

  // 4. Rewrite using LLM
  const rewritten = await rewriteArticle(
    article.content,
    competitorTexts,
    links
  );

  // 5. Publish updated article
  await publishArticle(article.id, rewritten);

  console.log("Article rewritten and published successfully.");
}

run().catch((err) => {
  console.error("Pipeline failed:", err.message);
});
