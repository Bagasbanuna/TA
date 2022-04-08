const { PrismaClient } = require("@prisma/client");
const expressAsyncHandler = require("express-async-handler");
const prisma = new PrismaClient();



const GetJurusan = expressAsyncHandler(async (req, res) => {
    let jrsn = await prisma.jurusan.findMany();

    res.json(jrsn);
})

const CreateJurusan = expressAsyncHandler(async (req, res) =>{
    let {Id, namaJurusan, profileId} = req.body

    let jrsn = await prisma.jurusan.create({
        data: {
            Id: Number(Id),
            namaJurusan: namaJurusan,
            profileId: Number(profileId)
        }
    })

    let success = jrsn !=null
    let result = {
        success: success,
        data: jrsn
    }

    res.json(result)

})

module.exports = {GetJurusan, CreateJurusan}