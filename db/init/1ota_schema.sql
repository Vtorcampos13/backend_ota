-- MySQL Script generated by MySQL Workbench
-- lun 30 oct 2023 13:25:17
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema otabilbao
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `otabilbao` ;

-- -----------------------------------------------------
-- Schema otabilbao
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `otabilbao` DEFAULT CHARACTER SET utf8 ;
USE `otabilbao` ;

-- -----------------------------------------------------
-- Table `otabilbao`.`coches`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `otabilbao`.`coches` ;

CREATE TABLE IF NOT EXISTS `otabilbao`.`coches` (
  `id_coche` INT NOT NULL AUTO_INCREMENT,
  `marca` VARCHAR(45) NULL,
  `modelo` VARCHAR(45) NULL,
  `matricula` VARCHAR(10) NULL,
  `password` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id_coche`),
  UNIQUE INDEX `id_coche_UNIQUE` (`id_coche` ASC) VISIBLE,
  UNIQUE INDEX `matricula_UNIQUE` (`matricula` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `otabilbao`.`zona`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `otabilbao`.`zona` ;

CREATE TABLE IF NOT EXISTS `otabilbao`.`zona` (
  `id_zona` INT NOT NULL AUTO_INCREMENT,
  `nombre_zona` VARCHAR(45) NULL,
  `tarifa_hora` TINYINT NULL,
  PRIMARY KEY (`id_zona`),
  UNIQUE INDEX `id_zona_UNIQUE` (`id_zona` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `otabilbao`.`parking`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `otabilbao`.`parking` ;

CREATE TABLE IF NOT EXISTS `otabilbao`.`parking` (
  `id_parking` INT NOT NULL AUTO_INCREMENT,
  `fecha_inicio` DATETIME NULL,
  `fecha_fin` DATETIME NULL,
  `id_coche` INT NOT NULL,
  `id_zona` INT NOT NULL,
  `activo` BIT NULL DEFAULT 1,
  PRIMARY KEY (`id_parking`),
  INDEX `fk_parking_coches_idx` (`id_coche` ASC) VISIBLE,
  UNIQUE INDEX `id_parking_UNIQUE` (`id_parking` ASC) VISIBLE,
  INDEX `fk_parking_zona1_idx` (`id_zona` ASC) VISIBLE,
  CONSTRAINT `fk_parking_coches`
    FOREIGN KEY (`id_coche`)
    REFERENCES `otabilbao`.`coches` (`id_coche`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_parking_zona1`
    FOREIGN KEY (`id_zona`)
    REFERENCES `otabilbao`.`zona` (`id_zona`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `otabilbao`.`multas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `otabilbao`.`multas` ;

CREATE TABLE IF NOT EXISTS `otabilbao`.`multas` (
  `id_multas` INT NOT NULL AUTO_INCREMENT,
  `importe_multa` TINYINT NULL,
  `fecha_multa` DATETIME NULL,
  `id_parking` INT NOT NULL,
  `activa` BIT NULL DEFAULT 1,
  PRIMARY KEY (`id_multas`),
  UNIQUE INDEX `id_multas_UNIQUE` (`id_multas` ASC) VISIBLE,
  INDEX `fk_multas_parking1_idx` (`id_parking` ASC) VISIBLE,
  CONSTRAINT `fk_multas_parking1`
    FOREIGN KEY (`id_parking`)
    REFERENCES `otabilbao`.`parking` (`id_parking`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- MySQL Script generated by MySQL Workbench
-- Tue Oct 31 16:52:06 2023
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema otabilbao
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema otabilbao
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `otabilbao` DEFAULT CHARACTER SET utf8 ;
USE `otabilbao` ;

-- -----------------------------------------------------
-- Table `otabilbao`.`admin`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `otabilbao`.`admin` (
  `user` VARCHAR(100) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`user`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;