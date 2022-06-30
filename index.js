const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const todos = require("./routes/todos")
const signup = require("./routes/signup")
const signIn = require("./routes/signin")


const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/todos", todos)
app.use("/api/signup", signup);
app.use("/api/signin", signIn);

require("dotenv").config();

app.get("/", (req, res) => {
  res.send("welcome to our todos api");
});

const connection_string = process.env.CONNECTION_STRING;
const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Listening to port ${port}...`);
});

mongoose
  .connect(connection_string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
   
  })
  .then(() => {
    console.log("mongo db connection established");
  })
  .catch((error) => {
    console.error("Mongodb connection failed:", error.message);
  });
