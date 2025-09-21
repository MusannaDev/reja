console.log("Jack Ma Maslahatlari");
const list = [
  "yaxshi talaba boling", // 20
  "togri boshliq tanlang va koproq xato qiling", // 20-30
  "ozingiz uchun ishlashni boshlang", // 30-40
  "siz kuchli bolgan narsalarni qiling", // 40-50
  "yoshlarga investitsiya qiling", // 50-60
  "buyogiga dam oling, foydasi yuq endi", // 60
];

/* function maslahatBering (a, callback) {
  if (typeof a !== "number") callback("insert a number", null);
  else if (a <= 20) callback(null, list[0]);
  else if (a > 20 && a <= 30) callback(null, list[1]); 
  else if (a > 30 && a <= 40) callback(null, list[2]);
  else if (a > 40 && a <= 50) callback(null, list[3]);
  else if (a > 50 && a <= 60) callback(null, list[4]);
  else {
    setInterval(function () {
      callback(null, list[5]);
    }, 1000);
  }
}

console.log("passed here");
maslahatBering(65, (err, data) => {
  if(err) console.log("ERROR:", err);
  console.log('javob;', data);
});
console.log("passed here 1"); */



//Assynchronous Function
async function maslahatBering (a) {
  if (typeof a !== "number") throw new Error("insert a number", null);
  else if (a <= 20) return null, list[0];
  else if (a > 20 && a <= 30) return list[1]; 
  else if (a > 30 && a <= 40) return list[2];
  else if (a > 40 && a <= 50) return list[3];
  else if (a > 50 && a <= 60) return list[4];
  else {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(list[5]);
      }, 5000);
    });
    //setTimeout(function () {
      //callback(null, list[5]);
    //}, 5000);
  }
}


// then/catch

/* console.log("passed here");
maslahatBering(25)
 .then(data => {
    console.log("javob:", data);
 })
 .catch(err => {
    console.log("ERROR:", err);
  });
console.log("passed here1"); */
  

//asyn/await

async function run() {
  let javob = await maslahatBering(65);
  console.log(javob);
  javob = await maslahatBering(31);
  console.log(javob);
  javob = await maslahatBering(41);
  console.log(javob);
}
run();


// MIT TASK A

/* Harf sifatida kiritilgan birinchi parametr, kiritilgan ikkinchi parametr tarkibida nechta ekanligini qaytaruvchiFunktsiya tuzing
Masalan: countLetter("e", "engineer")'engineer' so'zi tarkibida 'e' harfi 3 marotaba takrorlanganligi uchun 3 sonini qaytaradi */

function countLetter(letter, word) {
    // Harf va so'z katta-kichik harflarga sezgir bo'lmasligi uchun kichik harflarga aylantiramiz
    const lowerLetter = letter.toLowerCase();
    const lowerWord = word.toLowerCase();
    
    // Hisoblagichni boshlaymiz
    let count = 0;
    
    // So'zning har bir harfini tekshiramiz
    for (let i = 0; i < lowerWord.length; i++) {
        if (lowerWord[i] === lowerLetter) {
            count++; // Mos kelsa, hisoblagichni 1 ga oshiramiz
        }
    }
    
    // Natijani qaytaramiz
    return count;
}
console.log(countLetter("e", "engineer"));
console.log(countLetter("n", "intercontinental"));