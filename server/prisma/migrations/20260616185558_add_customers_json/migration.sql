/*
  Warnings:

  - You are about to alter the column `customers` on the `Mission` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Json`.

*/
-- AlterTable
ALTER TABLE `Mission` MODIFY `customers` JSON NOT NULL;
