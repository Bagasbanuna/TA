-- CreateTable
CREATE TABLE `user` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `profile` (
    `Id` INTEGER NOT NULL,
    `nim` INTEGER NOT NULL,
    `namaDepan` VARCHAR(191) NOT NULL,
    `namaBelakang` VARCHAR(191) NOT NULL,
    `alamat` VARCHAR(191) NOT NULL,
    `tempatLahir` VARCHAR(191) NOT NULL,
    `tanggalLahir` VARCHAR(191) NOT NULL,
    `jenisKelamin` VARCHAR(191) NOT NULL,
    `nomorHp` VARCHAR(191) NOT NULL,
    `tahunAngkatan` INTEGER NOT NULL,
    `fotoKtp` VARCHAR(191) NULL,
    `fotoProfile` VARCHAR(191) NULL,
    `userId` INTEGER NULL,

    UNIQUE INDEX `profile_Id_key`(`Id`),
    UNIQUE INDEX `profile_nim_key`(`nim`),
    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `jabatan` (
    `Id` INTEGER NOT NULL,
    `namaJabatan` VARCHAR(191) NOT NULL,
    `profileId` INTEGER NULL,

    UNIQUE INDEX `jabatan_Id_key`(`Id`),
    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `divisi` (
    `Id` INTEGER NOT NULL,
    `namaDivisi` VARCHAR(191) NOT NULL,
    `profileId` INTEGER NULL,

    UNIQUE INDEX `divisi_Id_key`(`Id`),
    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `jurusan` (
    `Id` INTEGER NOT NULL,
    `namaJurusan` VARCHAR(191) NOT NULL,
    `profileId` INTEGER NULL,

    UNIQUE INDEX `jurusan_Id_key`(`Id`),
    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rencanakerja` (
    `Id` INTEGER NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `tanggal` DATETIME(3) NOT NULL,
    `keterangan` VARCHAR(191) NOT NULL,
    `createAt` DATETIME(3) NOT NULL,
    `updateAt` DATETIME(3) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `userId` INTEGER NULL,

    UNIQUE INDEX `rencanakerja_Id_key`(`Id`),
    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `files` (
    `Id` INTEGER NOT NULL,
    `file` VARCHAR(191) NOT NULL,
    `createAt` DATETIME(3) NOT NULL,
    `rencanakerjaId` INTEGER NULL,

    UNIQUE INDEX `files_Id_key`(`Id`),
    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `jenisFile` (
    `Id` INTEGER NOT NULL,
    `jenisFile` VARCHAR(191) NOT NULL,
    `filesId` INTEGER NULL,

    UNIQUE INDEX `jenisFile_Id_key`(`Id`),
    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `gallery` (
    `Id` INTEGER NOT NULL,
    `gambar` VARCHAR(191) NOT NULL,
    `filesId` INTEGER NULL,

    UNIQUE INDEX `gallery_Id_key`(`Id`),
    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `kritiksaran` (
    `Id` INTEGER NOT NULL,
    `subjek` VARCHAR(191) NOT NULL,
    `komentar` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,

    UNIQUE INDEX `kritiksaran_Id_key`(`Id`),
    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `profile` ADD CONSTRAINT `profile_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`Id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `jabatan` ADD CONSTRAINT `jabatan_profileId_fkey` FOREIGN KEY (`profileId`) REFERENCES `profile`(`Id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `divisi` ADD CONSTRAINT `divisi_profileId_fkey` FOREIGN KEY (`profileId`) REFERENCES `profile`(`Id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `jurusan` ADD CONSTRAINT `jurusan_profileId_fkey` FOREIGN KEY (`profileId`) REFERENCES `profile`(`Id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `rencanakerja` ADD CONSTRAINT `rencanakerja_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`Id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `files` ADD CONSTRAINT `files_rencanakerjaId_fkey` FOREIGN KEY (`rencanakerjaId`) REFERENCES `rencanakerja`(`Id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `jenisFile` ADD CONSTRAINT `jenisFile_filesId_fkey` FOREIGN KEY (`filesId`) REFERENCES `files`(`Id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `gallery` ADD CONSTRAINT `gallery_filesId_fkey` FOREIGN KEY (`filesId`) REFERENCES `files`(`Id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `kritiksaran` ADD CONSTRAINT `kritiksaran_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;
