-- phpMyAdmin SQL Dump
-- version 4.5.3.1
-- http://www.phpmyadmin.net
--
-- 主機: 127.0.0.1
-- 產生時間： 2016-07-18 17:06:44
-- 伺服器版本: 5.6.17
-- PHP 版本： 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `test`
--

-- --------------------------------------------------------

--
-- 資料表結構 `account`
--

CREATE TABLE `account` (
  
  `id` int(11) NOT NULL,
  `date` char(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `USDtoTW` float(11) NOT NULL,
  `CNYtoTW` float(11) NOT NULL,
  `EURtoUSD` float(11) NOT NULL,
  `USDtoJPY` float(11) NOT NULL,
  `GBPtoUSD` float(11) NOT NULL,
  `AUDtoUSD` float(11) NOT NULL,
  `USDtoHKD` float(11) NOT NULL,
  `USDtoCNY` float(11) NOT NULL,
  `USDtoZAR` float(11) NOT NULL,
  `NZDtoUSD` float(11) NOT NULL

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 資料表的匯出資料 `account`
--

INSERT INTO `account` (`id` ,`date`, `USDtoTW`, `CNYtoTW`, `EURtoUSD`, `USDtoJPY`, `GBPtoUSD`, `AUDtoUSD`, `USDtoHKD`, `USDtoCNY`, `USDtoZAR`, `NZDtoUSD`) VALUES
(1, '4/2', 29.142, 4.648324, 1.2331, 106.3, 1.4063, 0.76855, 7.8481, 6.26935, 11.80955, 0.72335),
(2, '4/3', 29.148, 4.64488, 1.2323, 106.17, 1.40785, 0.7692, 7.8491, 6.2753, 11.81025, 0.72525),
(3, '4/9', 29.209, 4.629948, 1.22805, 107.1, 1.4103, 0.76735, 7.8494, 6.3087, 12.02505, 0.72945);
--
-- 已匯出資料表的索引
--

--
-- 資料表索引 `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `id_2` (`id`);
  

--
-- 在匯出的資料表使用 AUTO_INCREMENT
--

--
-- 使用資料表 AUTO_INCREMENT `account`
--
ALTER TABLE `account`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
