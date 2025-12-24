import { useEffect, useState } from "react";

const API_URL = "http://127.0.0.1:8000/api/articles";

export default function App() {
  const [articles, setArticles] = useState([]);
  const [expandedId, setExpandedId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch articles", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="container">Loading articles...</div>;
  }

  return (
    <div className="container">
      <h1 className="page-title">BeyondChats Articles</h1>

      {articles.map((article) => {
        const isExpanded = expandedId === article.id;

        return (
          <div key={article.id} className="card">
            <div className="card-header">
              <h2 className="title">
                {article.title && article.title !== "Untitled"
                  ? article.title
                  : "Untitled Article"}
              </h2>

              <span
                className={`badge ${
                  article.is_updated ? "badge-updated" : "badge-original"
                }`}
              >
                {article.is_updated ? "AI Enhanced" : "Original"}
              </span>
            </div>

            <div
              className="content"
              dangerouslySetInnerHTML={{
                __html: isExpanded
                  ? article.content
                  : article.content.slice(0, 400) + "...",
              }}
            />

            <button
              className="toggle-btn"
              onClick={() =>
                setExpandedId(isExpanded ? null : article.id)
              }
            >
              {isExpanded ? "Show Less" : "Read More"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
