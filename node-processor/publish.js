import axios from "axios";

const API_BASE = "http://127.0.0.1:8000/api";

export async function publishArticle(id, content) {
  await axios.put(`${API_BASE}/articles/${id}`, {
    content,
    is_updated: true,
  });
}
