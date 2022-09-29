import axios from 'axios';

const api = (token: String) =>
  axios.create({
    baseURL:
      'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline',
    params: {
      unitGroup: 'us',
      contentType: 'json',
      key: token,
    },
  });

const getCityWeather = async (cityName: string, key: string) => {
  return await api(key)
    .get(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?unitGroup=us&key=${key}&contentType=json`
    )
    .then(res => res.data)
    .catch(err => err);
};

export { getCityWeather };
