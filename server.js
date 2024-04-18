const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://steffipachake:1234@cluster0.oxytwjf.mongodb.net/ArtList";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true,  useUnifiedTopology: true   });

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
  })
  
const artRecorRouter = require("./route/ArtRecord");

app.use('/api', artRecorRouter);

  app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});