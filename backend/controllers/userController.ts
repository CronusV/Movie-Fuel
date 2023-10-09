const express = require('express');
const bodyParser = require('body-parser');
const userService = require('../service/userService');
const router = express.Router();

router.use(bodyParser.json());

// GET user profile by username
router.get('/profile/:username', async (req: any, res: any) => {
    const username = req.params.username;

    try {
        const userInfo = await userService.getProfile(username);

        if (userInfo) {
            res.status(200).json(userInfo);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
