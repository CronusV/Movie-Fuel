const expres = require('express');
const userController = require('../controllers/userController.ts');
const app = expres();
const cors = require('cors');
const PORT = 9000;

app.use(cors());

app.use('/user', userController);


app.listen(PORT, () => {
    console.log(`Server is listening on Port : ${PORT}`);
});