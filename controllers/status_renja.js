const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient();
const expressAsyncHandler = require('express-async-handler');
const routeStatusRenja = require('express').Router()


const StatusRenjaGet = expressAsyncHandler(async (req, res) => {
    const status = await prisma.statusRenja.findMany({
        select:{
            id: true,
            name:true
        }
    })

    res.status(200).json(status)
})




routeStatusRenja.get('/', StatusRenjaGet)

module.exports = {routeStatusRenja}