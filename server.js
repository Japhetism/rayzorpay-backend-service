const express = require("express");
const cors = require('cors');

//const connectDb = require("./database/connectDb");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors())

// connect to db
//connectDb();

// middlewares
app.use(express.json({ extended: false }));

app.use("/payment", cors(), require("./routes/payment"));

app.listen(port, () => console.log(`server started on port ${port}`));
