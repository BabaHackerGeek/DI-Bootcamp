const {db} = require ("../config/data.js");
const getAllProducts = () => {
    return db("products").select('id', 'name', 'price');
}

module.exports = {
    getAllProducts
}