require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const corsOptions = {
  origin: "*"
}

const app = express();
app.use(cors(corsOptions));
app.use(routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
