const { PrismaClient } = require("@prisma/client");
const expressAsyncHandler = require("express-async-handler");
const prisma = new PrismaClient();


const GetUser = expressAsyncHandler(async (req, res) => {
    let usr = await prisma.user.findMany();
    res.json(usr)
})

const CreateUser = expressAsyncHandler(async (req, res) => {

    let {username, email, password} = req.body

    let usr = await prisma.user.create({
        data: {
            email: email,
            password: password,
            username: username,
        }
    })

    // untuk cek berhasil / gagal 
    let success = usr != null
    let result = {
        success: success,
        data: usr
    }

    res.json(result)
})

module.exports = {GetUser, CreateUser}