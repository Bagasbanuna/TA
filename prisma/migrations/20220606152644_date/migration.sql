/*
  Warnings:

  - A unique constraint covering the columns `[profileId]` on the table `divisi` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[profileId]` on the table `jabatan` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[profileId]` on the table `jurusan` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `divisi_profileId_key` ON `divisi`(`profileId`);

-- CreateIndex
CREATE UNIQUE INDEX `jabatan_profileId_key` ON `jabatan`(`profileId`);

-- CreateIndex
CREATE UNIQUE INDEX `jurusan_profileId_key` ON `jurusan`(`profileId`);
