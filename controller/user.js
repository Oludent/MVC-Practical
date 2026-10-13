const database = require("../model/database.json");

const fs = require('fs');

const saveToDb = (data)=>{
    return new Promise((resolve, reject) => {
        fs.writeFile('./model/database.json', data, (err, data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}

const readUser = (req, res)=>{
    const users = database
    res.status(200).json({
        massage: `All users found have a total of: ${database.length}`,
        data: users
    })

}

const createUser = async (req, res)=>{
    const {name, gender, isMarried} = req.body;
    const user ={
        name,
        gender,
        isMarried,
        id: database.length + 1
    }

    database.push(user);

await saveToDb (JSON.stringify(database, null, 2));

res.status(201).json({
    massage: 'User created successfully',
    data: user
});
}

 const updateUser = async (req, res)=>{
    const id = req.params.id;
    const {name, gender, isMarried} = req.body;
    const user = database.find((user) => user.id == id);

    if (user == null){
        return res.status(404).json({
            massage: 'Update unsuccessful'
        })
    }

await saveToDb(JSON.stringify(database, null, 2));

res.status(200).json({
    massage: 'User updated successfully!',
    data: user
})
}

module.exports = {
    readUser,
    createUser,
    updateUser,
}