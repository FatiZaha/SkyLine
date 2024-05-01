-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: May 01, 2024 at 10:09 PM
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
-- Table structure for table `siege`
--

DROP TABLE IF EXISTS `siege`;
CREATE TABLE IF NOT EXISTS `siege` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `capacite` int NOT NULL,
  `type` int DEFAULT NULL,
  `avion_numero` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKlvsh1im1qpg5geoensyelvris` (`avion_numero`)
) ;

--
-- Dumping data for table `siege`
--

INSERT INTO `siege` (`id`, `capacite`, `type`, `avion_numero`) VALUES
(1, 300, 0, 1),
(2, 200, 1, 1),
(3, 400, 0, 2),
(4, 150, 1, 2),
(5, 250, 0, 3),
(6, 180, 1, 3),
(7, 350, 0, 4),
(8, 220, 1, 4),
(9, 400, 0, 5),
(10, 150, 1, 5),
(11, 250, 0, 6),
(12, 180, 1, 6),
(13, 350, 0, 7),
(14, 220, 1, 7),
(15, 400, 0, 8),
(16, 150, 1, 8),
(17, 250, 0, 9),
(18, 180, 1, 9),
(19, 350, 0, 10),
(20, 220, 1, 10),
(21, 300, 0, 11),
(22, 200, 1, 11),
(23, 400, 0, 12),
(24, 150, 1, 12),
(25, 250, 0, 13),
(26, 180, 1, 13),
(27, 350, 0, 14),
(28, 220, 1, 14),
(29, 400, 0, 15),
(30, 150, 1, 15),
(31, 250, 0, 16),
(32, 180, 1, 16),
(33, 350, 0, 17),
(34, 220, 1, 17),
(35, 400, 0, 18),
(36, 150, 1, 18),
(37, 250, 0, 19),
(38, 180, 1, 19),
(39, 350, 0, 20),
(40, 220, 1, 20),
(41, 300, 0, 21),
(42, 200, 1, 21),
(43, 400, 0, 22),
(44, 150, 1, 22),
(45, 250, 0, 23),
(46, 180, 1, 23);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `siege`
--
ALTER TABLE `siege`
  ADD CONSTRAINT `FKlvsh1im1qpg5geoensyelvris` FOREIGN KEY (`avion_numero`) REFERENCES `avion` (`numero`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
