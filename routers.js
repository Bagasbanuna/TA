const express = require("express");
const { GetJabatan, CreateJabatan } = require("./controllers/jabatan");
const { GetProfile, CreateProfile } = require("./controllers/profile");
const { GetUser, CreateUser } = require("./controllers/users");
const api = express.Router()

// User
api.get('/user', GetUser)
api.post('/user', CreateUser)

// profile
api.get('/profile', GetProfile)
api.post('/profile', CreateProfile)

//jabatan
api.get('/jabatan', GetJabatan)
api.post('/jabatan', CreateJabatan)


module.exports = {api}