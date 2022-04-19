-- DropForeignKey
ALTER TABLE `jenisfile` DROP FOREIGN KEY `jenisFile_filesId_fkey`;

-- AlterTable
ALTER TABLE `files` ADD COLUMN `jenisFileId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `files` ADD CONSTRAINT `files_jenisFileId_fkey` FOREIGN KEY (`jenisFileId`) REFERENCES `jenisFile`(`Id`) ON DELETE SET NULL ON UPDATE CASCADE;
