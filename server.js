const http = require("http");

const mongodb = require("mongodb");

let db;
//const connectionString = "mongodb+srv://  adam:Muhammadfatih2002@cluster0.t79yirg.mongodb.net/"

const connectionString = 
 "mongodb+srv://juraevotabek:Musanna_2002@cluster0.mi5i0lg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongodb.connect(
  connectionString, 
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection Mongodb");
    else {
      console.log("Mongodb connection succeed");
      module.exports = client;
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
        );
     });
    }
  }
);

 