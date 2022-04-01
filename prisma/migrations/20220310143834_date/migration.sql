-- DropIndex
DROP INDEX `profile_Id_key` ON `profile`;

-- AlterTable
ALTER TABLE `profile` MODIFY `Id` INTEGER NOT NULL AUTO_INCREMENT;
