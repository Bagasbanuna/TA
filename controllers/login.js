const { PrismaClient } = require("@prisma/client");
const expressAsyncHandler = require("express-async-handler");
const prisma = new PrismaClient();



const CreateLogin = expressAsyncHandler(async (req, res)=> {
    
    let {username, password} = req.body

    let login = await prisma.user.findFirst({
        where: {
            AND: [
                {
                    username: {
                        equals: username
                    }
                },
                {
                    password: {
                        equals: password
                    }
                }
            ]
        }
    })

    if(login){
        res.status(200).json({
            success: "true",
            data: login,
            message: "login berhasil"
        })
    }else{
        res.status(204).json({
            success: false,
            message: "username atau password salah"
        })
    }
})

module.exports = {CreateLogin}