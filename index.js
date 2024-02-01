import {initializeApp } from "https://www.gstatic.com/firebase.js/9.15.0/firebase-app.js"
import { getDatabase,ref,push} from "https://gstatic.com/firebase.js/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://devops-website-f2268-default-rtdb.asia-southeast1.firebasedatabase.app/"
}
const app = initializeApp(appSettings)
const database = getDatabase(app)
const barcodeInDB = ref(database, "Barcode")

const drinkType = document.getElementByID("value")
const addButton = document.getElementById("add_button")

addButton.addEventListener("click",function() {
   let drinksVal = drinkType.value
    push(barcodeInDB, drinksVal)
    console.log('${drinksVal} added to database')
