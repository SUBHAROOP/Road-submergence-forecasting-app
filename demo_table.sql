-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Feb 14, 2018 at 10:15 PM
-- Server version: 5.7.21-0ubuntu0.16.04.1
-- PHP Version: 7.0.22-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `road_submergence_forecast_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `demo_table`
--

CREATE TABLE `demo_table` (
  `id` int(10) NOT NULL,
  `rainfall` varchar(10) NOT NULL,
  `damwaterlevel` varchar(10) NOT NULL,
  `LandHeight` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `demo_table`
--

INSERT INTO `demo_table` (`id`, `rainfall`, `damwaterlevel`, `LandHeight`) VALUES
(1, '100.25', '15.6', '5000'),
(2, '45.56', '862.56', '8000');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `demo_table`
--
ALTER TABLE `demo_table`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `demo_table`
--
ALTER TABLE `demo_table`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
