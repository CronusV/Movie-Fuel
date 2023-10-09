const userDao = require('../dao/userDAO');

async function getProfile(username: String) {
    // calls the dao to check login

    const userData = await userDao.retrieveByUsername(username);



    return userData.Item;

}

module.exports = {
    getProfile
}