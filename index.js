import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
    databaseURL: "https://devops-website-f2268-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const dataInDB = ref(database, "Data");

const drinkType = document.getElementById("value");
const addButton = document.getElementById("add_button");

addButton.addEventListener("click", function () {
    let drinksVal = drinkType.value;

    console.log("Value to be added to Firebase:", drinksVal);

    // Push data to Firebase and handle the asynchronous operation
    push(dataInDB, drinksVal)
        .then(() => {
            console.log("Data added to Firebase successfully");
        })
        .catch((error) => {
            console.error("Error adding data to Firebase:", error);
        });
});
