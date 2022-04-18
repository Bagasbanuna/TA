const express = require("express");
const { GetDivisi, CreateDivisi } = require("./controllers/divisi");
const { GetFiles, CreateFiles } = require("./controllers/files");
const { GetGallery, CreateGallery } = require("./controllers/gallery");
const { GetJabatan, CreateJabatan } = require("./controllers/jabatan");
const { GetJenisfile, CreateJenisFiles } = require("./controllers/jenisFile");
const { GetJurusan, CreateJurusan } = require("./controllers/jurusan");
const { GetKritiksaran, CreateKritiksaran } = require("./controllers/kritiksaran");
const { GetProfile, CreateProfile } = require("./controllers/profile");
const { GetRencanakerja, CreateRencanakerja } = require("./controllers/rencanakerja");
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

//divisi
api.get('/divisi', GetDivisi)
api.post('/divisi', CreateDivisi)

//jurusan
api.get('/jurusan', GetJurusan)
api.post('/jurusan', CreateJurusan)

//rencanakerja
api.get('/rencanakerja', GetRencanakerja)
api.post('/rencanakerja', CreateRencanakerja)

//files
api.get('/files', GetFiles)
api.post('/files', CreateFiles)

//jenisfile
api.get('/jenisfiles', GetJenisfile)
api.post('/jenisfile', CreateJenisFiles)

//gallery
api.get('/gallery', GetGallery)
api.post('/gallery', CreateGallery)

//kritiksaran
api.get('/kritiksaran', GetKritiksaran)
api.post('/kritiksaran', CreateKritiksaran)

module.exports = {api}