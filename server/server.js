const express = require("express");
const cors = require("cors");

const app = express();

// Here we are configuring express to use body-parser as middle-ware.
app.use(cors());

// Setting up the routes
const routes = { POST: require("./routes/post"), GET: require("./routes/get") };

app.use("/post", routes.POST);
app.use("/get", routes.GET);

// Declaring The Port
const PORT = process.env.PORT || 8000; // The alternitive port can be any four-digit number

app.get("/", (req, res) => {
  res.send("pp");
});

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  res.status(404).send("404 Page Not Found");
});

// Listen to the port
app.listen(PORT, (err) => {
  if (err) console.log(err);
  else console.log(`Listening On Port ${PORT}`);
});
