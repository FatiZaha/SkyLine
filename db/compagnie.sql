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
-- Table structure for table `compagnie`
--

DROP TABLE IF EXISTS `compagnie`;
CREATE TABLE IF NOT EXISTS `compagnie` (
  `code` bigint NOT NULL AUTO_INCREMENT,
  `adresse` varchar(255) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `tel` varchar(255) DEFAULT NULL,
  `admin_id` bigint DEFAULT NULL,
  PRIMARY KEY (`code`),
  KEY `FKf4cagnj6yri7a5idgkvte04ub` (`admin_id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `compagnie`
--

INSERT INTO `compagnie` (`code`, `adresse`, `logo`, `nom`, `tel`, `admin_id`) VALUES
(1, '1 Boulevard Mohammed V, Casablanca', 'Royal Air Maroc.jpg', 'Royal Air Maroc', '+212-522-234567', 1),
(2, '2 Rue du Lieutenant Mahroud Mohammed, Casablanca', 'Air Arabia Maroc.jpg', 'Air Arabia Maroc', '+212-522-987654', 1),
(3, '3 Aéroport Mohammed V, Casablanca', 'RAM Express.jpg', 'RAM Express', '+212-522-876543', 1),
(4, '1 Rue de Paris, 75001 Paris', 'airfrance.jpg', 'Air France', '+33-1-23456789', 1),
(5, '2 Rue de la République, 75002 Paris', 'transaviafrance.jpg', 'Transavia France', '+33-1-98765432', 1),
(6, '3 Avenue des Champs-Élysées, 75008 Paris', 'corsairinternational.jpg', 'Corsair International', '+33-1-87654321', 1),
(7, '123 Broadway, New York, NY 10001', 'deltaairlines.jpg', 'Delta Air Lines', '+1-212-3456789', 1),
(8, '456 Park Avenue, New York, NY 10002', 'americanairlines.jpg', 'American Airlines', '+1-212-9876543', 1),
(9, '789 5th Avenue, New York, NY 10003', 'jetblueairways.jpg', 'JetBlue Airways', '+1-212-8765432', 1),
(10, '1 Shibuya Crossing, Tokyo', 'allnipponairways.jpg', 'All Nippon Airways (ANA)', '+81-3-23456789', 1),
(11, '2 Ginza Street, Tokyo', 'japanairlines.jpg', 'Japan Airlines (JAL)', '+81-3-98765432', 1),
(12, '3 Roppongi Hills, Tokyo', 'peachaviation.jpg', 'Peach Aviation', '+81-3-87654321', 1),
(13, '1 Piccadilly, London', 'britishairways.jpg', 'British Airways', '+44-20-23456789', 1),
(14, '2 Oxford Street, London', 'easyjet.jpg', 'easyJet', '+44-20-98765432', 1),
(15, '3 Regent Street, London', 'virginatlanticairways.jpg', 'Virgin Atlantic Airways', '+44-20-87654321', 1),
(16, '1 Circular Quay, Sydney', 'qantas.jpg', 'Qantas', '+61-2-23456789', 1),
(17, '2 Bondi Beach, Sydney', 'virginaustralia.jpg', 'Virgin Australia', '+61-2-98765432', 1),
(18, '3 Darling Harbour, Sydney', 'jetstarairways.jpg', 'Jetstar Airways', '+61-2-87654321', 1),
(19, '1 Sheikh Zayed Road, Dubai', 'emirates.jpg', 'Emirates', '+971-4-23456789', 1),
(20, '2 Dubai International Airport, Dubai', 'flydubai.jpg', 'Flydubai', '+971-4-98765432', 1),
(21, '3 Al Maktoum Road, Dubai', 'airarabia.jpg', 'Air Arabia', '+971-4-87654321', 1),
(22, '1 Via del Corso, Rome', 'alitalia.jpg', 'Alitalia', '+39-06-12345678', 1),
(23, '2 Piazza di Spagna, Rome', 'ryanair.jpg', 'Ryanair', '+39-06-87654321', 1),
(24, '3 Via Nazionale, Rome', 'vueling.jpg', 'Vueling Airlines', '+39-06-98765432', 1),
(25, '1 Unter den Linden, Berlin', 'lufthansa.jpg', 'Lufthansa', '+49-30-23456789', 1),
(26, '3 Friedrichstraße, Berlin', 'airberlin.jpg', 'Air Berlin', '+49-30-87654321', 1),
(27, '1 Gran Vía, Madrid', 'iberia.jpg', 'Iberia', '+34-91-23456789', 1),
(28, '2 Calle de Alcalá, Madrid', 'air-europa.jpg', 'Air Europa', '+34-91-98765432', 1),
(29, '3 Paseo de la Castellana, Madrid', 'vueling.jpg', 'Vueling Airlines', '+34-91-87654321', 1),
(30, '1 Red Square, Moscow', 'aeroflot.jpg', 'Aeroflot', '+7-495-2345678', 1),
(31, '2 Tverskaya Street, Moscow', 's7airlines.jpg', 'S7 Airlines', '+7-495-9876543', 1),
(32, '3 Arbat Street, Moscow', 'utair.jpg', 'UTair Aviation', '+7-495-8765432', 1),
(33, '1 Yonge Street, Toronto', 'aircanada.jpg', 'Air Canada', '+1-416-2345678', 1),
(34, '2 Bay Street, Toronto', 'westjet.jpg', 'WestJet', '+1-416-9876543', 1),
(35, '3 Queen Street West, Toronto', 'porterairlines.jpg', 'Porter Airlines', '+1-416-8765432', 1),
(36, '1 Paseo de la Reforma, Mexico City', 'aeromexico.jpg', 'Aeroméxico', '+52-55-23456789', 1),
(37, '2 Avenida Insurgentes, Mexico City', 'interjet.jpg', 'Interjet', '+52-55-98765432', 1),
(38, '3 Polanco, Mexico City', 'vivaaerobus.jpg', 'VivaAerobus', '+52-55-87654321', 1);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `compagnie`
--
ALTER TABLE `compagnie`
  ADD CONSTRAINT `FKf4cagnj6yri7a5idgkvte04ub` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
