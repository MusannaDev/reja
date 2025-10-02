const http = require("http"); //nodejs core package

const mongodb = require("mongodb"); // external package, maqsadli object qaytaradi, sababi connection api bn database orasida


const connectionString = 
 "mongodb+srv://juraevotabek:Musanna_2002@cluster0.mi5i0lg.mongodb.net/Reja?retryWrites=true&w=majority&appName=Cluster0"

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

      module.exports = client; // clientni export qilindi, xohlagan joyda ishlatishimiz mumkin

      const app = require("./app");

      const server = http.createServer(app); // serverni ishga tushiryapmiz
      let PORT = 4002;
      server.listen(PORT, function () {
        console.log(
          `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
        );
     });
    }
  } // callback function success or faail boladi
);

// Databasega connection qilyapmiz
// Databaseni ulamasak backend ishga ishga tushirganimizdan foyda yuq

