import axios from "axios";
export const getGifs = async (searchValue) => {
  const url = "https://api.giphy.com/v1/gifs/search";
  const api_key = "eSChpsDMCHMqFHRljHI7sgui7HhrA3JX";
  const res = await axios.get(url, {
    params: {
      api_key: api_key,
      q: searchValue,
      limit: 10,
    },
  });
  const { data } = res.data;
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });
  return gifs;
};
