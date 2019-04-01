const products = require("../products.json")



const getProducts = (req, res)  => {
    res.json(products)

}
const getProduct = (req, res) => {
    const item = products.find(val => val.id === parseInt(req.params.id))
    if(!item) {
        return res.status(500).send("item not found is list")
    }
    res.status(200).send(item)
}
 
module.exports = {getProducts, getProduct}