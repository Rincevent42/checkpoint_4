ALTER SCHEMA `modelcars`  DEFAULT CHARACTER SET utf8mb4  DEFAULT COLLATE utf8mb4_bin ;

CREATE TABLE `car` (
  `id` INT NOT NULL,
  `mark` VARCHAR(45) NULL,
  `year` INT NULL,
  `period_of_production` VARCHAR(10) NULL,
  `model` VARCHAR(100) NULL,
  `version` VARCHAR(45) NULL,
  `energy` ENUM('Electrique', 'Hybride', 'Thermique') CHARACTER SET 'utf8mb4' NULL,
  `url_photo` VARCHAR(255) NULL,
  `category` VARCHAR(45) NULL,
  `color` VARCHAR(45) NULL,
  `color_name` VARCHAR(100) NULL,
  `maker` VARCHAR(45) NULL,
  `material_number` VARCHAR(45) NULL,
  `date_of_purchase` DATE NULL,
  `price` DECIMAL(4,2) NULL,
  `currency` VARCHAR(4) NULL,
  `dealer` VARCHAR(100) NULL,
  `scale` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC));
