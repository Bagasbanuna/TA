const { PrismaClient } = require("@prisma/client");
const expressAsyncHandler = require("express-async-handler");
const req = require("express/lib/request");
const prisma = new PrismaClient();



const GetRencanakerja = expressAsyncHandler (async (req, res) =>{
    let renja = await prisma.rencanakerja.findMany();

    res.json(renja);
})

const CreateRencanakerja = expressAsyncHandler (async (req, res) =>{
    let {Id, title, tanggal, keterangan, status, userId} = req.body
 
    let renja = await prisma.rencanakerja.create({
        data: {
            Id: Number(Id),
            title: title,
            tanggal: new Date (tanggal), 
            keterangan: keterangan,
            status: status,
            userId: Number(userId)
        }
    })

    let success = renja !=null
    let result = {
        success: success,
        data: renja
    }

    res.json(result)
})

const UpdateRencanakerja = expressAsyncHandler (async (req, res)=>{
    let {Id, title, tanggal, keterangan, status, userId} = req.body
 
    let renja = await prisma.rencanakerja.update({
        data : {
            Id: Number(Id),
            title: title,
            tanggal: new Date (tanggal), 
            keterangan: keterangan,
            status: status,
            userId: Number(userId)
        },
        where: {
            Id: Number(Id)
        }
    })

    res.json(renja)
})

const DeleteRencanakerja = expressAsyncHandler (async (req, res)=> {
    let {Id} = req.body

    let renja = await prisma.rencanakerja.delete({
        where: {
            Id: Number(Id)
        }
    })
    res.json(renja)
})



module.exports = {GetRencanakerja, CreateRencanakerja, UpdateRencanakerja, DeleteRencanakerja}