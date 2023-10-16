const userDao = require('../dao/userDAO');

async function getProfile(username: String) {
    // calls the dao to check login

    const userData = await userDao.retrieveByUsername(username);



    return userData.Item;

}
async function updateFavorites(username: String, id: String) {
    // calls the dao to check login

    const userData = await userDao.addToFavorites(username, id);



    return userData.Item;

}
module.exports = {
    getProfile,
    updateFavorites
}