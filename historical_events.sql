-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 02, 2018 at 07:13 PM
-- Server version: 5.7.19
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `road_submergence`
--

-- --------------------------------------------------------

--
-- Table structure for table `historical_events`
--

DROP TABLE IF EXISTS `historical_events`;
CREATE TABLE IF NOT EXISTS `historical_events` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `state_name` varchar(20) NOT NULL,
  `station_name` varchar(20) NOT NULL,
  `city_or_village_name` varchar(20) NOT NULL,
  `land_altitude` int(6) NOT NULL,
  `rainfall_amount` int(4) NOT NULL,
  `soil_liquid_limit` int(5) NOT NULL,
  `soil_plastic_limit` int(5) NOT NULL,
  `soil_plasticity` int(5) NOT NULL,
  `submergence` varchar(3) NOT NULL,
  `month` varchar(10) NOT NULL,
  `year` int(4) NOT NULL,
  `released_dam_water` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
