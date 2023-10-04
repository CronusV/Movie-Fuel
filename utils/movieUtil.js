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
searchDataBaseByID(34134)
    .then(function (data) {
    console.log(data);
})
    .catch(function (err) { return console.error('error:' + err); });
