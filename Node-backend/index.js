const server = require("express");
const bodyParser = require("body-parser");
const compression = require("compression");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const noteRouter = require("./src/routes");

mongoose.connect("mongodb://localhost:27017/NotePad");
mongoose.connection.on("connected", () => {
  console.log("Db Connected");
});

const app = server();

app.use(compression());
app.use(bodyParser.json());
app.use(cors());

app.use("/notepad", noteRouter);

app.use(server.static(path.resolve(__dirname, "../note-pad/build")));

app.get("/", (req, res) => {
  return res.json({ message: "Hey, I am your very own Note Pad" });
});
app.get("/api", (req, res) => {
  return res.json({ message: "Hey, I am your very own Note Pad api" });
});

app.disable("x-powered-by");

app.listen(3001, () => {
  console.log("Server active on Port 3000 ");
});
