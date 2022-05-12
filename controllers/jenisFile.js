const { PrismaClient } = require("@prisma/client");
const expressAsyncHandler = require("express-async-handler");
const prisma = new PrismaClient();



const GetJenisfile = expressAsyncHandler (async (req,res) =>{
    let jenf = await prisma.jenisFile.findMany();

    res.json(jenf);
})

const CreateJenisFiles = expressAsyncHandler (async (req, res) =>{
    let {Id, jenisFile, filesId} = req.body

    let jenf = await prisma.jenisFile.create({
        data: {
            Id: Number(Id),
            jenisFile: jenisFile,
            filesId: Number(filesId)
        }
    })

    let success = jenf !=null
    let result = {
        success: success,
        data: jenf
    }

    res.json(result)
})

module.exports = {GetJenisfile, CreateJenisFiles}