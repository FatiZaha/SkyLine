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
-- Table structure for table `ville`
--

DROP TABLE IF EXISTS `ville`;
CREATE TABLE IF NOT EXISTS `ville` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `ville`
--

INSERT INTO `ville` (`id`, `image`, `nom`) VALUES
(1, 'paris.jpg', 'Marrakech'),
(2, 'new_york.jpg', 'New York'),
(3, 'tokyo.jpg', 'Tokyo'),
(4, 'londres.jpg', 'London'),
(5, 'sydney.jpg', 'Sydney'),
(6, 'dubai.jpg', 'Dubai'),
(7, 'rome.jpg', 'Rome'),
(8, 'berlin.jpg', 'Berlin'),
(9, 'madrid.jpg', 'Madrid'),
(10, 'moscou.jpg', 'Moscow'),
(11, 'toronto.jpg', 'Toronto'),
(12, 'mexico.jpg', 'Mexico City'),
(13, 'singapour.jpg', 'Singapore'),
(14, 'istanbul.jpg', 'Istanbul'),
(15, 'mumbai.jpg', 'Mumbai'),
(16, 'bangkok.jpg', 'Bangkok'),
(17, 'amsterdam.jpg', 'Amsterdam'),
(18, 'hong_kong.jpg', 'Hong Kong'),
(19, 'vancouver.jpg', 'Vancouver'),
(20, 'rio_de_janeiro.jpg', 'Rio de Janeiro'),
(21, 'cape_town.jpg', 'Cape Town'),
(22, 'dublin.jpg', 'Dublin'),
(23, 'singapour2.jpg', 'Casablanca');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
