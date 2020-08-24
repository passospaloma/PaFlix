import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND_DATA}/categories`;

function getAllWithVideos () {

  return fetch(URL_CATEGORIES)
   .then(async (serverAnswer) => {
     const answer = await serverAnswer.json();
    
  });
}

export default {
  getAllWithVideos,
};
