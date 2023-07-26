import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'TpTMkBL56XyMSzCa6qdBDRoMEMk3D7_kE0iONYlAHE8',
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;
