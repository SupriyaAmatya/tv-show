import { get } from '../utils/http';
import { showsEndpoint, scheduleShowsEndpoint, episodesEndpoint, searchEndpont } from '../config/endpoints';

export const getAllShows = async () => {
  const showsList = await get(showsEndpoint);
  if (!showsList) {
    return null
  }

  return showsList;
}

export const getIndividualShow = async (id) => {
  const individualShow = await get(`${showsEndpoint}/${id}`)
  if (!individualShow) {
    return null
  }
  return individualShow;
}

export const getAllEpisodes = async (id) => {
  const episodes = await get(`${showsEndpoint}/${id}/episodes`)
  if (!episodes) {
    return null
  }
  return episodes;
}

export const getShowCast = async (id) => {
  const cast = await get(`${showsEndpoint}/${id}/cast`)
  if (!cast) {
    return null
  }
  return cast;
}

export const getSchedule = async () => {
  const todayShows = await get(scheduleShowsEndpoint)
  if (!todayShows) {
    return null
  }

  return todayShows;
}

export const getEpisodeDetails = async (id) => {
  const episodeDetails = await get(`${episodesEndpoint}/${id}?embed=show`);
  if (!episodeDetails) {
    return null
  }
  return episodeDetails;
}

export const getSearchResults = async (value) =>{
  const searchResults = await get(`${searchEndpont}?q=${value}`);

  if (!searchResults) {
    return null
  }
  return searchResults;
}
