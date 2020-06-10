const express = require("express");
const cors = require("cors");

const app = express();

// Here we are configuring express to use cors as middle-ware.
app.use(cors());

// Setting up the routes
const routes = { POST: require("./routes/post"), GET: require("./routes/get") }; // These routes can be any name, and they dont need to be seperated into eachh method

app.use("/post", routes.POST);
app.use("/get", routes.GET);

// Declaring The Port
const PORT = process.env.PORT || 8000; // The alternitive port can be any four-digit number

app.get("/", express.static("server/views/example")); // Here we are loading some html

app.put("/auth/submit", (req, res) => {
  console.log(req);
  res.send("pp");
});
app.use("/auth", express.static("server/views/auth"));

// Handling 404 errors (Always keep this before we listen to the port)
app.use((req, res) => {
  res.status(404).send("404 Page Not Found");
});

// Listen to the port
app.listen(PORT, (err) => {
  if (err) console.log(err);
  else console.log(`Listening On Port ${PORT}`);
});
