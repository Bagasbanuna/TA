-- CreateTable
CREATE TABLE `StatusRenja` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `rencanakerjaId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `StatusRenja` ADD CONSTRAINT `StatusRenja_rencanakerjaId_fkey` FOREIGN KEY (`rencanakerjaId`) REFERENCES `rencanakerja`(`Id`) ON DELETE SET NULL ON UPDATE CASCADE;
