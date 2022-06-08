const express = require("express");
const { GetDivisi, CreateDivisi, UpdateDivisi, DeleteDivisi } = require("./controllers/divisi");
const { GetFiles, CreateFiles, UpdateFiles, DeleteFiles } = require("./controllers/files");
const { GetGallery, CreateGallery, UpdateGallery, DeleteGallery } = require("./controllers/gallery");
const { GetJabatan, CreateJabatan, UpdateJabatan, DeleteJabatan } = require("./controllers/jabatan");
const { GetJenisfile, CreateJenisfile, UpdateJenisfile, DeleteJenisfile } = require("./controllers/jenisFile");
const { GetJurusan, CreateJurusan, UpdateJurusan, DeleteJurusan } = require("./controllers/jurusan");
const { GetKritiksaran, CreateKritiksaran, UpdateKritiksaran, DeleteKritiksaran } = require("./controllers/kritiksaran");
const { CreateLogin } = require("./controllers/login");
const { GetProfile, CreateProfile, UpdateProfile, DeleteProfile } = require("./controllers/profile");
const { CreateRegistrasi } = require("./controllers/registrasi");
const { GetRencanakerja, CreateRencanakerja, UpdateRencanakerja, DeleteRencanakerja } = require("./controllers/rencanakerja");
const { GetUser, CreateUser, UpdateUser, DeleteUser } = require("./controllers/users");
const { GetUserInclude } = require("./controllers/user_include");
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
api.delete('/profile/delete/:Id', DeleteProfile)

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
api.post('/files/update', UpdateFiles)
api.post('/files/delete', DeleteFiles)

//jenisfile
api.get('/jenisfile', GetJenisfile)
api.post('/jenisfile', CreateJenisfile)
api.post('/jenisfile/update', UpdateJenisfile)
api.post('/jenisfile/delete', DeleteJenisfile)

//gallery
api.get('/gallery', GetGallery)
api.post('/gallery', CreateGallery)
api.post('/gallery/update', UpdateGallery)
api.post('/gallery/delete', DeleteGallery)

//kritiksaran
api.get('/kritiksaran', GetKritiksaran)
api.post('/kritiksaran', CreateKritiksaran)
api.post('/kritiksaran/update', UpdateKritiksaran)
api.post('/kritiksaran/delete', DeleteKritiksaran)

// Registrasi
api.post('/registrasi', CreateRegistrasi)

// Login
api.post('/login', CreateLogin)

//
api.get('/userInclude', GetUserInclude)

module.exports = {api}