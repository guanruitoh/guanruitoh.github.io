import {initializeApp } from "https://www.gstatic.com/firebase.js/9.15.0/firebase-app.js"
import { getDatabase,ref} from "https://gstatic.com/firebase.js/9.15.0/firebase-database.js"
import { generateBarcode } from "thanks_for_purchase.html"

const appSettings = {
    databaseURL: "https://devops-website-f2268-default-rtdb.asia-southeast1.firebasedatabase.app/"
}
const app = initializeApp(appSettings)
const database = getDatabase(app)
const barcodeInDB = ref(database, "Barcode")

