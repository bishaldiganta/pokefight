const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");
require("./db");

//using Router here!
const pokeRouter = require("./routes/pokemon");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/pokemon", pokeRouter);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
