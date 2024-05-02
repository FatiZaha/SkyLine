-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: May 01, 2024 at 11:29 PM
-- Server version: 8.2.0
-- PHP Version: 8.2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `skyline`
--

-- --------------------------------------------------------

--
-- Table structure for table `avion`
--

DROP TABLE IF EXISTS `avion`;
CREATE TABLE IF NOT EXISTS `avion` (
  `numero` bigint NOT NULL AUTO_INCREMENT,
  `modele` varchar(255) DEFAULT NULL,
  `compagnie_code` bigint DEFAULT NULL,
  PRIMARY KEY (`numero`),
  KEY `FK1g70i3jcbg5r05v793d6xawm` (`compagnie_code`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `avion`
--

INSERT INTO `avion` (`numero`, `modele`, `compagnie_code`) VALUES
(1, 'Boeing 747', 1),
(2, 'Airbus A320', 2),
(3, 'Boeing 737', 3),
(4, 'Airbus A350', 4),
(5, 'Boeing 777', 5),
(6, 'Airbus A380', 6),
(7, 'Boeing 787', 7),
(8, 'Airbus A330', 8),
(9, 'Boeing 767', 9),
(10, 'Airbus A319', 10),
(11, 'Boeing 737', 11),
(12, 'Airbus A320', 12),
(13, 'Boeing 747', 13),
(14, 'Airbus A320', 14),
(15, 'Boeing 777', 15),
(16, 'Airbus A330', 16),
(17, 'Boeing 787', 17),
(18, 'Airbus A320', 18),
(19, 'Boeing 737', 19),
(20, 'Airbus A350', 20),
(21, 'Boeing 787', 21),
(22, 'Airbus A320', 22),
(23, 'Boeing 737', 23),
(24, 'Boeing 747', 1),
(25, 'Airbus A320', 2),
(26, 'Boeing 737', 3),
(27, 'Airbus A350', 4),
(28, 'Boeing 777', 5),
(29, 'Airbus A380', 6),
(30, 'Boeing 787', 7),
(31, 'Airbus A330', 8),
(32, 'Boeing 767', 9),
(33, 'Airbus A319', 10),
(34, 'Boeing 737', 11),
(35, 'Airbus A320', 12),
(36, 'Boeing 747', 13),
(37, 'Airbus A320', 14),
(38, 'Boeing 777', 15),
(39, 'Airbus A330', 16),
(40, 'Boeing 787', 17),
(41, 'Airbus A320', 18),
(42, 'Boeing 737', 19),
(43, 'Airbus A350', 20),
(44, 'Boeing 787', 21),
(45, 'Airbus A320', 22),
(46, 'Boeing 737', 23);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `avion`
--
ALTER TABLE `avion`
  ADD CONSTRAINT `FK1g70i3jcbg5r05v793d6xawm` FOREIGN KEY (`compagnie_code`) REFERENCES `compagnie` (`code`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
