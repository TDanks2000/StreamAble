const axios = require("axios");

const defaultHost = "http://localhost";
const defaultPort = 3003 || 4000;

const api = axios.create({
  baseURL: `${defaultHost}:${defaultPort}`,
});

export const getPopular = async ({ type = 1, limit = 10 }) => {
  const { data } = await api.get(`/api/animixplay/popular?type=${type}`);

  if (!data)
    return {
      error: "No data",
    };

  const sortedData = data.sort((a, b) => {
    return b.score - a.score;
  });

  return sortedData.splice(0, limit);
};

export const getTopRated = async (limit = 10, offset = 0) => {
  const { data } = await api.get(
    `/api/anime/top?limit=${limit}&offset=${offset}`
  );

  if (!data)
    return {
      error: "No data",
    };

  return data;
};

export const getInfo = async (id) => {
  const { data } = await api.get(`/api/anime/info?mal_id=${id}`);

  if (!data)
    return {
      error: "No data",
    };

  return data;
};

export const getEpisodes = async (id) => {
  const { data } = await api.get(`/api/anime/episodes?mal_id=${id}`);

  if (!data)
    return {
      error: "No data",
    };

  return data;
};

export const getEpisodeStream = async (id, epNum, from) => {
  const { data } = await api.get(
    `/api/AnimixPlay/source?animeId=${id}&episode=${epNum}`
  );

  if (!data)
    return {
      error: "No data",
    };

  return data;
};

export const getAnimaxInfo = async (id) => {
  const { data } = await api.get(`/api/AnimixPlay/info?mal_id=${id}`);

  if (!data)
    return {
      error: "No data",
    };

  return data;
};

export const getGoGoInfo = async (id) => {
  const { data } = await api.get(`/api/gogoanime/info?animeId=${id}`);

  if (!data)
    return {
      error: "No data",
    };

  return data;
};

export const getSearch = async ({ search, limit = 5, offset = 0 }) => {
  if (!search)
    return {
      error: "No search",
    };

  const { data } = await api.get(`/api/gogoanime/search?search=${search}`);

  if (!data)
    return {
      error: "No data",
    };

  return data.splice(offset, limit);
};
