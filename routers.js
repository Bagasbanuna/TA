const express = require("express");
const { GetDivisi, CreateDivisi, UpdateDivisi, DeleteDivisi } = require("./controllers/divisi");
const { GetFiles, CreateFiles } = require("./controllers/files");
const { GetGallery, CreateGallery } = require("./controllers/gallery");
const { GetJabatan, CreateJabatan, UpdateJabatan, DeleteJabatan } = require("./controllers/jabatan");
const { GetJenisfile, CreateJenisFiles } = require("./controllers/jenisFile");
const { GetJurusan, CreateJurusan, UpdateJurusan, DeleteJurusan } = require("./controllers/jurusan");
const { GetKritiksaran, CreateKritiksaran } = require("./controllers/kritiksaran");
const { GetProfile, CreateProfile, UpdateProfile, DeleteProfile } = require("./controllers/profile");
const { GetRencanakerja, CreateRencanakerja, UpdateRencanakerja, DeleteRencanakerja } = require("./controllers/rencanakerja");
const { GetUser, CreateUser, UpdateUser, DeleteUser } = require("./controllers/users");
const api = express.Router()

// User
api.get('/user', GetUser)
api.post('/user', CreateUser)
api.post('/user/update', UpdateUser)
api.post('/user/delete', DeleteUser)

// profile
api.get('/profile', GetProfile)
api.post('/profile', CreateProfile)
api.post('/profile/update', UpdateProfile)
api.post('/profile/delete', DeleteProfile)

//jabatan
api.get('/jabatan', GetJabatan)
api.post('/jabatan', CreateJabatan)
api.post('/jabatan/update', UpdateJabatan)
api.post('/jabatan/delete', DeleteJabatan)

//divisi
api.get('/divisi', GetDivisi)
api.post('/divisi', CreateDivisi)
api.post('/divisi/update', UpdateDivisi)
api.post('/divisi/delete', DeleteDivisi)

//jurusan
api.get('/jurusan', GetJurusan)
api.post('/jurusan', CreateJurusan)
api.post('/jurusan/update', UpdateJurusan)
api.post('/jurusan/delete', DeleteJurusan)

//rencanakerja
api.get('/rencanakerja', GetRencanakerja)
api.post('/rencanakerja', CreateRencanakerja)
api.post('/rencanakerja/update', UpdateRencanakerja)
api.post('/rencanakerja/delete', DeleteRencanakerja)

//files
api.get('/files', GetFiles)
api.post('/files', CreateFiles)

//jenisfile
api.get('/jenisfile', GetJenisfile)
api.post('/jenisfile', CreateJenisFiles)

//gallery
api.get('/gallery', GetGallery)
api.post('/gallery', CreateGallery)

//kritiksaran
api.get('/kritiksaran', GetKritiksaran)
api.post('/kritiksaran', CreateKritiksaran)

module.exports = {api}