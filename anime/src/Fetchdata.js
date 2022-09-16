import axios from "axios";

export const getPosts = async (pageParam = 1) => {
  const response = axios.get(
    `https://api.jikan.moe/v4/anime?page=${pageParam}`
  );

  return (await response).data;
};
