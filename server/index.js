const express = require("express")
const app = express()
const {getProduct, getProducts} = require("./getProducts")


app.get("/api/products", getProducts)
app.get("/api/products/id", getProduct)



app.listen(3001, () => {
console.log("i'm waiting on 3001 Sir");
})
