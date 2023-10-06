require('dotenv').config({ path: require('find-config')('.env') });

const key:string|undefined = process.env.TMDB_accessToken
function searchDataBaseByQuery(query: string, language: string = 'en-US', page: number = 1): Promise<object> {
    const fetch = require('node-fetch');
    const url: string = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=${language}&page=${page}`
    const options:object = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${key}`
        }
      };
      let data: Promise<object>= new Promise((resolve,reject) => {
        fetch(url, options)
        .then(res => res.json())
        .then((json) => {
            resolve(json);
        })
        .catch(err => console.error('error:' + err));
      })
    return(data)
}

function searchDataBaseByID(id: number): Promise<object> {
  const fetch = require('node-fetch');
  const url: string = `https://api.themoviedb.org/3/movie/${id}`
  const options: object = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${key}`
      }
    };
    let data: Promise<object> = new Promise((resolve,reject) => {
      fetch(url, options)
      .then(res => res.json())
      .then((json) => {
          resolve(json);
      })
      .catch(err => console.error('error:' + err));
    })
  return(data)
}

// filtered search
function filteredSearchSimple(genresInclude: string, genresExclude: string, orderBy: string, page: number): Promise<object> {
  const fetch = require('node-fetch');
  const url: string = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=${orderBy}&with_genres=${genresInclude}&without_genres=${genresExclude}`
  const options: object = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${key}`
      }
    };
    let data: Promise<object> = new Promise((resolve,reject) => {
      fetch(url, options)
      .then(res => res.json())
      .then((json) => {
          resolve(json);
      })
      .catch(err => console.error('error:' + err));
    })
  return(data)
}

// get images "https://image.tmdb.org/t/p/original

function getImagesByID(id: number): Promise<object> {
  const fetch = require('node-fetch');
  const url: string = `https://api.themoviedb.org/3/movie/${id}/images?include_image_language=en&language=en`
  const options: object = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${key}`
      }
    };
    let data: Promise<object> = new Promise((resolve,reject) => {
      fetch(url, options)
      .then(res => res.json())
      .then((json) => {
          resolve(json);
      })
      .catch(err => console.error('error:' + err));
    })
  return(data)
}
function buildImageURL(path: string):string{
  return "https://image.tmdb.org/t/p/original"+path;
}
// filteredSearchSimple("12","28,18","revenue.desc",1)
// .then((data) => {
//     console.log(data)
// })
// .catch(err => console.error('error:' + err));
getImagesByID(330457)
.then((data) => {
  console.log(data)
  console.log(buildImageURL(data.posters[0].file_path))
})
.catch(err => console.error('error:' + err));
module.exports = {
  searchDataBaseByQuery,
  searchDataBaseByID,
  filteredSearchSimple,
  getImagesByID,
  buildImageURL
}
