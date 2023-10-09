require('dotenv').config({ path: require('find-config')('.env') });
var key = process.env.TMDB_accessToken;
function searchDataBaseByQuery(query, language, page) {
    if (language === void 0) { language = 'en-US'; }
    if (page === void 0) { page = 1; }
    var fetch = require('node-fetch');
    var url = "https://api.themoviedb.org/3/search/movie?query=".concat(query, "&include_adult=false&language=").concat(language, "&page=").concat(page);
    var options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: "Bearer ".concat(key)
        }
    };
    var data = new Promise(function (resolve, reject) {
        fetch(url, options)
            .then(function (res) { return res.json(); })
            .then(function (json) {
                resolve(json);
            })
            .catch(function (err) { return console.error('error:' + err); });
    });
    return (data);
}
function searchDataBaseByID(id) {
    var fetch = require('node-fetch');
    var url = "https://api.themoviedb.org/3/movie/".concat(id);
    var options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: "Bearer ".concat(key)
        }
    };
    var data = new Promise(function (resolve, reject) {
        fetch(url, options)
            .then(function (res) { return res.json(); })
            .then(function (json) {
                resolve(json);
            })
            .catch(function (err) { return console.error('error:' + err); });
    });
    return (data);
}
// filtered search
function filteredSearchSimple(genresInclude, genresExclude, orderBy, page) {
    var fetch = require('node-fetch');
    var url = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=".concat(page, "&sort_by=").concat(orderBy, "&with_genres=").concat(genresInclude, "&without_genres=").concat(genresExclude);
    var options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: "Bearer ".concat(key)
        }
    };
    var data = new Promise(function (resolve, reject) {
        fetch(url, options)
            .then(function (res) { return res.json(); })
            .then(function (json) {
                resolve(json);
            })
            .catch(function (err) { return console.error('error:' + err); });
    });
    return (data);
}
// get images "https://image.tmdb.org/t/p/original
function getImagesByID(id) {
    var fetch = require('node-fetch');
    var url = "https://api.themoviedb.org/3/movie/".concat(id, "/images?include_image_language=en&language=en");
    var options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: "Bearer ".concat(key)
        }
    };
    var data = new Promise(function (resolve, reject) {
        fetch(url, options)
            .then(function (res) { return res.json(); })
            .then(function (json) {
                resolve(json);
            })
            .catch(function (err) { return console.error('error:' + err); });
    });
    return (data);
}
function buildImageURL(path) {
    return "https://image.tmdb.org/t/p/original" + path;
}
// filteredSearchSimple("12","28,18","revenue.desc",1)
// .then((data) => {
//     console.log(data)
// })
// .catch(err => console.error('error:' + err));
getImagesByID(330457)
    .then(function (data) {
        console.log(data);
        console.log(buildImageURL(data.posters[0].file_path));
    })
    .catch(function (err) { return console.error('error:' + err); });
export function buildImageURL(path) {
    return `https://image.tmdb.org/t/p/original${path}`;
}