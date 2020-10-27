//const require = require("express")
let allData = require("../data/data.json")


//get selectAllData
const selectAllData = () =>{
    return allData

} 

const selectDataById = (id) =>{
    const { id } = request.params
    
}

module.exports = {
    selectAllData,
    
    selectDataById
    
    //insertData
    
    //updateData
    
    //deleteData
}