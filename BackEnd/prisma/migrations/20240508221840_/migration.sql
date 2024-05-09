/*
  Warnings:

  - Added the required column `Price` to the `Pizza` table without a default value. This is not possible if the table is not empty.
  - Added the required column `TextoChamativo` to the `Pizza` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `pizza` ADD COLUMN `Price` DOUBLE NOT NULL,
    ADD COLUMN `TextoChamativo` VARCHAR(191) NOT NULL;
