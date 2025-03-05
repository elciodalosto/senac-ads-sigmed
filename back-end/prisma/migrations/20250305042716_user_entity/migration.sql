/*
  Warnings:

  - Added the required column `cpf` to the `Patient` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Patient` ADD COLUMN `cpf` VARCHAR(191) NOT NULL;
