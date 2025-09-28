/* console.log("Jack Ma Maslahatlari");
const list = [
  "yaxshi talaba boling", // 20
  "togri boshliq tanlang va koproq xato qiling", // 20-30
  "ozingiz uchun ishlashni boshlang", // 30-40
  "siz kuchli bolgan narsalarni qiling", // 40-50
  "yoshlarga investitsiya qiling", // 50-60
  "buyogiga dam oling, foydasi yuq endi", // 60
]; */

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
/* async function maslahatBering (a) {
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
} */


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

/* async function run() {
  let javob = await maslahatBering(65);
  console.log(javob);
  javob = await maslahatBering(31);
  console.log(javob);
  javob = await maslahatBering(41);
  console.log(javob);
}
run(); */


// MIT TASK A

/* Harf sifatida kiritilgan birinchi parametr, kiritilgan ikkinchi parametr tarkibida nechta ekanligini qaytaruvchiFunktsiya tuzing
Masalan: countLetter("e", "engineer")'engineer' so'zi tarkibida 'e' harfi 3 marotaba takrorlanganligi uchun 3 sonini qaytaradi */

/* function countLetter(letter, word) {
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
*/

// MIT Task B
//TASK B: 

// Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
// MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.

/* function numberCounter(text){
    if(typeof text === 'string'){
        text =  text.split('')
        let counter = 0
       
        for(const item of text){
            if(!isNaN(item) && item !== ' '){
                counter++
            }
        }
        return counter
    }

}

console.log('ishtirok etgan raqamlar soni :',numberCounter('welcome123')); */

/* 

  MITASK-C 

  Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
  MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!

*/

/* const moment = require("moment");

class Shop {
  // State

  //Constructor
  constructor(non, lagmon, cola) {
    this.non = non;
    this.lagmon = lagmon;
    this.cola = cola;
  }

  // Joriy vaqtni olish uchun yordamchi method
  _getTime() {
      return moment().format('HH:mm[da]');
    }

  // Method
  

  sotish(mahsulot, miqdor) {
    const time = this._getTime();
    
    if (miqdor > 0 && mahsulot.toLowerCase()) {
      let mahsulotSotish = `Hozir ${time} ${this.non} ta non sotildi`;
      console.log(mahsulotSotish);
    } else {
      console.log("Iltimos 0 dan katta bo'lgan son kiriting");
    }
  }

  qabul(mahsulot, miqdor) {
    const time = this._getTime();
   if (miqdor > 0 && mahsulot.toLowerCase()) {
      let mahsulotQabul = `Hozir ${time} ${this.cola} ta cola sotildi`;
      console.log(mahsulotQabul);
    } else {
      console.log("Iltimos 0 dan katta bo'lgan son kiriting");
    }
  }

  qoldiq() {
    const time = this._getTime();
    const mahsulotQoldiq = `Hozir ${time} ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cola mavjud!`;
    console.log(mahsulotQoldiq);
  }
}

const shop = new Shop (4, 5, 2);
console.log(shop.qoldiq());
shop.sotish('non', 3);
shop.qabul('cola', 4);
console.log(shop.qoldiq()); */

const moment = require("moment");

class Shop {
  constructor(non, lagmon, cola) {
    this.non = non;
    this.lagmon = lagmon;
    this.cola = cola;
  }

  _getTime() {
    return moment().format('HH:mm[da]');
  }

  qoldiq() {
    const time = this._getTime();
    const message = `Hozir ${time} ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cola mavjud!`;
    
    return message;
  }

  sotish(mahsulot, miqdor) {
    const time = this._getTime();
    let message;

    if (miqdor <= 0) {
      message = `Xato: Miqdor musbat bo'lishi kerak!`;
      console.log(`Sotish xatosi ${time}: ${message}`);
      return message;
    }

    switch (mahsulot.toLowerCase()) {
      case 'non':
        if (this.non >= miqdor) {
          this.non -= miqdor;
          message = `${miqdor}ta non sotildi`;
        } else {
          message = `Xato: Yetarli non mavjud emas!`;
        }
        break;
      case 'lagmon':
        if (this.lagmon >= miqdor) {
          this.lagmon -= miqdor;
          message = `${miqdor}ta lagmon sotildi`;
        } else {
          message = `Xato: Yetarli lagmon mavjud emas!`;
        }
        break;
      case 'cola':
        if (this.cola >= miqdor) {
          this.cola -= miqdor;
          message = `${miqdor}ta cola sotildi`;
        } else {
          message = `Xato: Yetarli cola mavjud emas!`;
        }
        break;
      default:
        message = `Xato: Noto'g'ri mahsulot nomi!`;
    }

    console.log(`Sotish amaliyoti ${time} bajarildi: ${message}`);
    return this;
  }

  qabul(mahsulot, miqdor) {
    const time = this._getTime();
    let message;

    if (miqdor <= 0) {
      message = `Xato: Miqdor musbat bo'lishi kerak!`;
      console.log(`Qabul xatosi ${time}: ${message}`);
      return message;
    }

    switch (mahsulot.toLowerCase()) {
      case 'non':
        this.non += miqdor;
        message = `${miqdor}ta non qabul qilindi`;
        break;
      case 'lagmon':
        this.lagmon += miqdor;
        message = `${miqdor}ta lagmon qabul qilindi`;
        break;
      case 'cola':
        this.cola += miqdor;
        message = `${miqdor}ta cola qabul qilindi`;
        break;
      default:
        message = `Xato: Noto'g'ri mahsulot nomi!`;
    }

    console.log(`Qabul amaliyoti ${time} bajarildi: ${message}`);
    return this;
  }
}

// Test qilish
const shop = new Shop(4, 5, 2);
console.log(shop.qoldiq());
shop.sotish('non', 3);
shop.qabul('cola', 4);
console.log(shop.qoldiq());