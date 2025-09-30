//const { response } = require("../app");

console.log("Frontend JSda ishga tushdi");

function itemTemplate(item) {
  return `<li class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
                <span class="item-text">${item.reja}</span>
                <div>
                    <button 
                     data-id="${item._id}" 
                     class="edit-me btn btn-secondary btn-sm mr -1 " 
                    >
                      O'zgartirish
                    </button>
                    <button 
                      data-id="${item._id}" 
                      class="delet-me btn btn-danger btn-sm">O'chirish</button>
                </div>
          </li>`
}



let createField = document.getElementById("create-field");

/* Formni qo'lga olib olamiz getElementById orqali  "submit" bosganda pastdaagi function ishga tushadi */

document.getElementById("create-form").addEventListener("submit", function (e) {
  // Stops traditional API
  e.preventDefault();
  // traditional API ni to'xtatishdan maqsad Rest API ni qurish

  // Generate Rest API
  console.log("FRONTENDAN BACKENDGA REST API JONATAMIZ") 
  axios // backendda ham ishlaydi, ishlab turgan 2 t backend serverdan bir biridan ma'lumot ololadi
    .post("/create-item", {reja: createField.value}) // create-item header, rejadn boshlangan body
    .then((response) => {
      console.log("Step6 => Frontendga qaytib kirish");
      document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));
      createField.value = "";
      createField.focus();
  })
  .catch((err) => {
    console.log("Iltimos qaytadan harakat qiling");
  });
});


document.addEventListener("click", function (e) {
  // delete operations
  console.log(e.target);
  if (e.target.classList.contains("delete-me")) {
    if(confirm("Aniq o'chirmoqchimisiz?")) {
       axios
        .post("/delete-item", { id: e.target.getAttribute("data-id") })
        .then((response) => {
          console.log(response.data);
          e.target.parentElement.parentElement.remove();
         })
        .catch((err) => {
          console.log("Iltimos qaytadan harakat qiling");
        });
    }
     
  }

  // edit operations
  if (e.target.classList.contains("edit-me")) {
    let userInput = prompt(
      "O'zgartirishingizni kiriting", 
      e.target.parentElement.parentElement.querySelector(".item-text").innerHTML
    );
    
    if (userInput) {
      axios
        .post("/edit-item", {
          id: e.target.getAttribute("data-id"), 
          new_input: userInput,
        })
        .then(response => {
          console.log(response.data);
          e.target.parentElement.parentElement.querySelector(
            ".item-text").innerHTML = userInput;
        })
        .catch(err => {
          console.log("Iltimos qaytadan harakat qiling");
        });
    }
  }
});


document.getElementById("clean-all").addEventListener("click", function() {
  axios.post("/delete-all", { delete_all: true }).then(response => {
    alert(response.data.state);
    document.location.reload();
  })
});