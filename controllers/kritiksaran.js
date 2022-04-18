const { PrismaClient } = require("@prisma/client");
const expressAsyncHandler = require("express-async-handler");
const prisma = new PrismaClient();



const GetKritiksaran = expressAsyncHandler (async (req, res)=> {
    let krisa = await prisma.kritiksaran.findMany();

    res.json(krisa);
})

const CreateKritiksaran = expressAsyncHandler (async (req, res)=> {
    let {Id, subjek, komentar, userId} = req.body

    let krisa = await prisma.create({
        data: {
            Id: Number(Id),
            subjek: subjek,
            komentar: komentar,
            userId: Number(userId)
        }
    })

    let success = krisa !=null
    let result = {
        success: success,
        data: krisa
    }

    res.json(result)
})

module.exports = {GetKritiksaran, CreateKritiksaran}