/*
  Warnings:

  - You are about to drop the column `CreateAt` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `Email` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `Password` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `Username` on the `user` table. All the data in the column will be lost.
  - Added the required column `email` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `CreateAt`,
    DROP COLUMN `Email`,
    DROP COLUMN `Password`,
    DROP COLUMN `Username`,
    ADD COLUMN `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `password` VARCHAR(191) NOT NULL,
    ADD COLUMN `profileUserId` INTEGER NULL,
    ADD COLUMN `username` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `profile` (
    `userId` INTEGER NOT NULL,
    `nim` INTEGER NOT NULL,
    `namaDepan` VARCHAR(191) NOT NULL,
    `namaBelakang` VARCHAR(191) NOT NULL,
    `jurusan` VARCHAR(191) NOT NULL,
    `alamat` VARCHAR(191) NOT NULL,
    `tempatLahir` VARCHAR(191) NOT NULL,
    `tanggalLahir` VARCHAR(191) NOT NULL,
    `jenisKelamin` VARCHAR(191) NOT NULL,
    `nomorHp` VARCHAR(191) NOT NULL,
    `tahunAngkatan` INTEGER NOT NULL,
    `fotoKtp` VARCHAR(191) NULL,
    `fotoProfile` VARCHAR(191) NULL,

    UNIQUE INDEX `profile_userId_key`(`userId`),
    UNIQUE INDEX `profile_nim_key`(`nim`),
    PRIMARY KEY (`userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_profileUserId_fkey` FOREIGN KEY (`profileUserId`) REFERENCES `profile`(`userId`) ON DELETE SET NULL ON UPDATE CASCADE;
