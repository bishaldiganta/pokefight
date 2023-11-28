const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");

//using Router here!
const pokeRouter = require("./routes/pokemon");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/pokemon", pokeRouter);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
