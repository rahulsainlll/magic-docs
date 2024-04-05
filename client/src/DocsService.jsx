import axios from "axios";

const API_URL = "/api/docs"; // Adjust the port if your backend runs on a different one

export const fetchArticles = () => axios.get(API_URL);
export const fetchArticleBySlug = (slug) => axios.get(`${API_URL}/${slug}`);
export const createArticle = (articleData) => axios.post(API_URL, articleData);
export const updateArticle = (id, articleData) =>
  axios.put(`${API_URL}/${id}`, articleData);
export const deleteArticle = (id) => axios.delete(`${API_URL}/${id}`);
