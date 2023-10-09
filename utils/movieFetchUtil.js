// have to convert to typescript, coudn't figure out how to get typescript to stop complaining about promises
require('dotenv').config({ path: require('find-config')('.env') });

const key = process.env.TMDB_accessToken

function searchDataBaseByQuery(query, language = 'en-US', page = 1) {
  const fetch = require('node-fetch');
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=${language}&page=${page}`
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${key}`
    }
  };
  let data = new Promise((resolve, reject) => {
    fetch(url, options)
      .then(res => res.json())
      .then((json) => {
        resolve(json);
      })
      .catch(err => console.error('error:' + err));
  })
  return (data)
}
function searchDataBaseByID(id) {
  const fetch = require('node-fetch');
  const url = `https://api.themoviedb.org/3/movie/${id}`
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${key}`
    }
  };
  let data = new Promise((resolve, reject) => {
    fetch(url, options)
      .then(res => res.json())
      .then((json) => {
        resolve(json);
      })
      .catch(err => console.error('error:' + err));
  })
  return (data)
}
searchDataBaseByID(34134)
  .then((data) => {
    console.log(data)
  })
  .catch(err => console.error('error:' + err));


