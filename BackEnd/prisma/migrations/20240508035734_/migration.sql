-- CreateTable
CREATE TABLE `FuncionarioCliente` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `email` VARCHAR(250) NOT NULL,
    `senha` VARCHAR(8) NOT NULL,
    `tipo` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pizza` (
    `PizzaID` INTEGER NOT NULL AUTO_INCREMENT,
    `Nome` VARCHAR(100) NOT NULL,
    `Foto` VARCHAR(260) NOT NULL,
    `Ingredientes` VARCHAR(191) NOT NULL,
    `Alergias` VARCHAR(460) NOT NULL,

    PRIMARY KEY (`PizzaID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
