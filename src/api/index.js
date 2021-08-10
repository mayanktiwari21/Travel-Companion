import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
  const res = await axios.request({
    method: 'GET',
    url: `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
    params: {
      bl_latitude: sw.lat,
      tr_latitude: ne.lat,
      bl_longitude: sw.lng,
      tr_longitude: ne.lng,
    },
    headers: {
      'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_TRAVEL_API_KEY,
      'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
    },
  });
  // console.log(res.data);
  return res.data.data;
};

export const getWeatherData = async (lat, lng) => {
  const res = await axios.request({
    method: 'GET',
    url: 'https://community-open-weather-map.p.rapidapi.com/find',
    params: {
      lon: lng,
      lat: lat,
    },
    headers: {
      'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_WEATHER_API_KEY,
      'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
    },
  });
  return res.data;
};
