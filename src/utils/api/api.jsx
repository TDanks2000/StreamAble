import axios from "axios";

const backupHost = "https://consume-api.up.railway.app";
// const backupHost = "https://consume-api.onrender.com";

const api = axios.create({
  baseURL: backupHost,
});

export const getSkipTimes = async (malId, episodeNumber, episodeLength) => {
  const { data } = await api.get(
    `/api/anime/aniskip/skip-times/${malId}/${episodeNumber}/${episodeLength}`
  );

  if (!data)
    return {
      error: "No data",
    };

  return data;
};

export const getPopular = async (page = 1, perPage = 20) => {
  const {
    data: { results },
  } = await api.get(`/api/anilist/popular?page=${page}&perPage=${perPage}`);

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
  } = await api.get(`/api/anilist/trending?page=${page}&perPage=${perPage}`);

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
    `/api/anilist/advanced-search?sort=["SCORE_DESC"]`
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
    `/api/anilist/recent-episodes?page=${page}&perPage=${perPage}`
  );

  if (!results)
    return {
      error: "No data",
    };

  return results;
};

export const getAiringSchedule = async (perPage) => {
  const { data } = await api.get(
    `/api/anilist/airing-schedule?perPage=${perPage}`
  );

  if (!data?.results)
    return {
      error: "No data",
    };

  return data;
};

export const getInfo = async (id, dub) => {
  const { data } = await api.get(`/api/anilist/info/${id}?dub=${dub}`);

  if (!data)
    return {
      error: "No data",
    };

  return data;
};

export const getRandomAnime = async () => {
  const { data } = await api.get(`/api/anilist/random-anime`);

  if (!data)
    return {
      error: "No data",
    };

  return data;
};

export const getData = async (id) => {
  const { data } = await api.get(`/api/anilist/data/${id}`);

  if (!data)
    return {
      error: "No data",
    };

  return data;
};

export const getEpisodes = async (id, dub = false, fetchFiller = true) => {
  const { data } = await api.get(
    `/api/anilist/episodes/${id}?dub=${dub}&fetchFiller=${fetchFiller}`
  );

  if (!data)
    return {
      error: "No data",
    };

  return data;
};

export const getSource = async (episodeId, server) => {
  let { data } = await api.get(`/api/anilist/watch?episodeId=${episodeId}`);

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
    `/api/anilist/search/${search}?page=${page}&perPage=${perPage}`
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
    `/api/anilist/genre?genres=["${genres}"]&page=${page}&perPage=${perPage}`
  );

  return data;
};

export const getAnnTopic = async (topic) => {
  const { data } = await api.get(`/api/ann/topic/${topic}`);

  if (!data)
    return {
      error: "No data",
    };

  return data;
};

export const getAnnInfo = async (id) => {
  const { data } = await api.get(`/api/ann/topic/info?id=${id}`);

  if (!data)
    return {
      error: "No data",
    };

  return data;
};

export const getMangaSearch = async (title, page = 1, perPage = 20) => {
  const { data } = await api.get(
    `/api/anilist/manga/search/${encodeURIComponent(
      title
    )}?page=${page}&perPage=${perPage}`
  );

  if (!data)
    return {
      error: "No data",
    };

  return data;
};

export const getMangaFromAnimeTitle = async (title) => {
  const search = await getMangaSearch(title);
  const searchRes = search.results;

  const filter = await searchRes.filter((item) => {
    return item.title.romaji.toLowerCase() === title.toLowerCase();
  });

  return filter[0];
};

export const getMangaInfo = async (id) => {
  const { data } = await api.get(
    `/api/anilist/manga/info/${id}?provider=Mangasee123`
  );

  if (!data)
    return {
      error: "No data",
    };

  return data;
};

export const getReadManga = async (id) => {
  const { data } = await api.get(
    `/api/anilist/manga/read?chapterId=${id}&provider=Mangasee123`
  );

  if (!data)
    return {
      error: "No data",
    };

  return data;
};
