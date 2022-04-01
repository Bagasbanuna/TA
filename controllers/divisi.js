const { PrismaClient } = require("@prisma/client");
const expressAsyncHandler = require("express-async-handler");
const prisma = new PrismaClient();



const GetDivisi = expressAsyncHandler(async (req, res) => {
    let dvs = await prisma.divisi.findMany();

    res.json(dvs);
})

const CreateDivisi = expressAsyncHandler(async(req, res) => {
    let {Id, namaDivisi,profileId} = req.body

    let dvs = await prisma.divisi.create({
        data: {
            Id: Number(Id),
            namaDivisi: namaDivisi,
            profileId:Number(profileId),
        }
    })

    let success = dvs !=null
    let result = {
        success: success,
        data: dvs
    }

    res.json(result)
})


module.exports = {GetDivisi}