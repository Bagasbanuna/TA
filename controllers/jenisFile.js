const { PrismaClient } = require("@prisma/client");
const expressAsyncHandler = require("express-async-handler");
const prisma = new PrismaClient();



const GetJenisfile = expressAsyncHandler (async (req,res) =>{
    let jenf = await prisma.jenisFile.findMany();

    res.json(jenf);
})

const CreateJenisfile = expressAsyncHandler (async (req, res) =>{
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

const UpdateJenisfile = expressAsyncHandler (async (req, res)=> {
    let {Id, jenisFile, filesId} = req.body

    let jenf = await prisma.jenisFile.update({
        data: {
            Id: Number(Id),
            jenisFile: jenisFile,
            filesId: Number(filesId)
        },
        where: {
            Id: Number(Id)
        }
    })
    res.json(jenf)
})

const DeleteJenisfile = expressAsyncHandler (async (req, res)=> {
    let {Id} =req.body

    let jenf = await prisma.jenisFile.delete({
        where: {
            Id: Number(Id)
        }
    })
    res.json(jenf)
})




module.exports = {GetJenisfile, CreateJenisfile, UpdateJenisfile, DeleteJenisfile}