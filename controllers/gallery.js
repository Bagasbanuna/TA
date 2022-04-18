const { PrismaClient } = require("@prisma/client");
const { json } = require("express");
const expressAsyncHandler = require("express-async-handler");
const prisma = new PrismaClient();



const GetGallery = expressAsyncHandler (async (req,res) =>{
    let glry = await prisma.gallery.findMany();

    res.json(glry);
})

const CreateGallery = expressAsyncHandler (async (req, res)=>{
    let {Id, gambar, filesId} = req.body

    let glry = await prisma.gallery.create({
        data: {
            Id: Number(Id),
            gambar: gambar,
            filesId: Number(filesId)
        }
    })

    let success = glry !=null
    let result = {
        success: success,
        data: glry
    }

    res.json(result)

})

module.exports = {GetGallery, CreateGallery}