const { PrismaClient } = require("@prisma/client");
const expressAsyncHandler = require("express-async-handler");
const prisma = new PrismaClient();

const CreateRegistrasi = expressAsyncHandler (async (req, res)=> {
    let {email, username, password} = req.body

    let reg  = await prisma.user.create({
        data: {
            email: email,
            password: password,
            username: username,
        }
    })
    
    res.json(reg)
})

module.exports = {CreateRegistrasi}