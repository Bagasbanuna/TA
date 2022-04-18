const { PrismaClient } = require("@prisma/client");
const expressAsyncHandler = require("express-async-handler");
const prisma = new PrismaClient();



const GetFiles = expressAsyncHandler(async (req, res) =>{
    let fls = await prisma.files.findMany();

    res.json(fls);
})

const CreateFiles = expressAsyncHandler (async (req, res) =>{
    let {Id, file, jenisFile, rencanakerjaId} = req.body

    let fls = await prisma.files.create({
        data: {
            Id: Number(Id),
            file: file,
            jenisFile: jenisFile,
            rencanakerjaId: Number(rencanakerjaId)
        }
    })

    let success = fls !=null
    let result = {
        success: success,
        data: fls
    }

    res.json(result)
})

module.exports = {GetFiles, CreateFiles}