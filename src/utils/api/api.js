const axios = require("axios");

const defaultHost = "http://localhost";
const defaultPort = 3003 || 4000;

const api = axios.create({
  baseURL: `${defaultHost}:${defaultPort}`,
});

export const getPopular = async (page = 1, perPage = 20) => {
  const {
    data: { results },
  } = await api.get(`/api/anime/popular?page=${page}&perPage=${perPage}`);

  if (!results)
    return {
      error: "No data",
    };

  const sortedData = results.sort((a, b) => {
    return b.rating - a.rating;
  });

  return sortedData;
};

export const getTrending = async (page = 1, perPage = 20) => {
  const {
    data: { results },
  } = await api.get(`/api/anime/trending?page=${page}&perPage=${perPage}`);

  if (!results)
    return {
      error: "No data",
    };

  const sortedData = results.sort((a, b) => {
    return b.rating - a.rating;
  });

  return sortedData;
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

export const getRecentEpisodes = async (page = 1, perPage = 20) => {
  const {
    data: { results },
  } = await api.get(
    `/api/anime/recent-episodes?page=${page}&perPage=${perPage}`
  );

  if (!results)
    return {
      error: "No data",
    };

  return results;
};

export const getAiringSchedule = async (perPage) => {
  const { data } = await api.get(
    `/api/anime/airing-schedule?perPage=${perPage}`
  );

  if (!data?.results)
    return {
      error: "No data",
    };

  return data;
};

export const getInfo = async (id, dub) => {
  const { data } = await api.get(`/api/anime/info/${id}?dub=${dub}`);

  if (!data)
    return {
      error: "No data",
    };

  return data;
};

export const getData = async (id) => {
  const { data } = await api.get(`/api/anime/data/${id}`);

  if (!data)
    return {
      error: "No data",
    };

  return data;
};

export const getEpisodes = async (id, dub = false) => {
  const { data } = await api.get(`/api/anime/episodes/${id}?dub=${dub}`);

  if (!data)
    return {
      error: "No data",
    };

  return data;
};

export const getSource = async (episodeId, provider) => {
  let { data } = await api.get(`/api/anime/watch/?episodeId=${episodeId}`);

  if (!data)
    return {
      error: "No data",
    };

  return data;
};

export const getServers = async (episodeId) => {
  let { data } = await api.get(`/api/anime/servers/${episodeId}`);

  if (!data)
    return {
      error: "No data",
    };

  return data;
};

export const getSearch = async (search, page = 1, perPage = 20) => {
  if (!search)
    return {
      error: "No search",
    };

  const {
    data: { results },
  } = await api.get(
    `/api/anime/search/${search}?page=${page}&perPage=${perPage}`
  );

  if (!results)
    return {
      error: "No data",
    };

  return results;
};

export const getGenre = async (genres, page = 1, perPage = 20) => {
  if (!genres)
    return {
      error: "No genres",
    };
  const { data } = await api.get(
    `/api/anime/genre?genres=["${genres}"]&page=${page}&perPage=${perPage}`
  );

  return data;
};
