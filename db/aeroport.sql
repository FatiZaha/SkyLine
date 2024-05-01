-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: May 01, 2024 at 10:10 PM
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
-- Table structure for table `aeroport`
--

DROP TABLE IF EXISTS `aeroport`;
CREATE TABLE IF NOT EXISTS `aeroport` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) DEFAULT NULL,
  `ville_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKqup0sfkkulbuo32txo9foh6hp` (`ville_id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `aeroport`
--

INSERT INTO `aeroport` (`id`, `nom`, `ville_id`) VALUES
(1, 'Marrakech Menara International Airport', 1),
(2, 'John F. Kennedy International Airport', 2),
(3, 'Tokyo-Haneda International Airport', 3),
(4, 'Narita International Airport', 3),
(5, 'London Heathrow Airport', 4),
(6, 'London Gatwick Airport', 4),
(7, 'Sydney Airport', 5),
(8, 'Bankstown Airport', 5),
(9, 'Dubai International Airport', 6),
(10, 'Léonard-de-Vinci de Rome Fiumicino International Airport', 7),
(11, 'Berlin Brandenburg Airport', 8),
(12, 'Adolfo-Suárez de Madrid-Barajas Airport', 9),
(13, 'Moscou-Cheremetievo International Airport', 10),
(14, 'Toronto Pearson International Airport', 11),
(15, 'Mexico International Airport', 12),
(16, 'Changi Airport Singapore', 13),
(17, 'Istanbul Airport', 14),
(18, 'Sabiha Gökçen Airport', 14),
(19, ' Chhatrapati Shivaji Maharaj International Airport', 15),
(20, ' Bombay-Santacruz Airport', 15),
(21, 'Suvarnabhumi Airport', 16),
(22, 'Don Mueang International Airport', 16),
(23, 'Amsterdam Airport Schiphol', 17),
(24, 'Hong Kong International Airport', 18),
(25, 'Vancouver International Airport', 19),
(26, 'Rio de Janeiro-Galeão International Airport', 20),
(27, 'Cape Town International Airport', 21),
(28, 'Dublin Airport', 22),
(29, 'Casablanca Mohammed V International Airport', 23),
(30, 'Anfa Airport', 23);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `aeroport`
--
ALTER TABLE `aeroport`
  ADD CONSTRAINT `FKqup0sfkkulbuo32txo9foh6hp` FOREIGN KEY (`ville_id`) REFERENCES `ville` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
