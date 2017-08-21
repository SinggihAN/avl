-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Mar 27, 2017 at 03:43 PM
-- Server version: 5.5.54-0ubuntu0.14.04.1
-- PHP Version: 7.0.17-2+deb.sury.org~trusty+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `laravel-crud`
--

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE IF NOT EXISTS `customers` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `last_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `gender` enum('m','f') COLLATE utf8_unicode_ci NOT NULL DEFAULT 'm',
  `image` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'default.svg',
  `email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=241 ;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `first_name`, `last_name`, `gender`, `image`, `email`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Alan', 'Jorgensen', 'm', '1.png', 'prunakatho@housat.com', '2017-03-13 22:00:00', '2017-03-18 12:38:11', NULL),
(146, 'Nedra', 'Welch', 'f', 'default_f.svg', 'chandler.considine@bernier.org', NULL, '2017-03-27 12:41:04', NULL),
(147, 'Tianna', 'Padberg', 'm', 'default_f.svg', 'zoey08@bosco.com', NULL, NULL, NULL),
(149, 'Brook', 'Simonis', 'm', 'default.svg', 'unolan@hagenes.com', NULL, NULL, NULL),
(151, 'Rhianna', 'Jakubowski', 'm', 'default_f.svg', 'kaylee.hilpert@welch.info', NULL, NULL, NULL),
(153, 'Enola', 'Balistreri', 'f', '4.png', 'lavonne81@beatty.net', NULL, NULL, NULL),
(154, 'Reggie', 'Wintheiser', 'm', 'default.svg', 'hdach@yahoo.com', NULL, NULL, NULL),
(156, 'Cecilia', 'Pagac', 'f', 'default_f.svg', 'gorczany.eddie@hotmail.com', NULL, NULL, NULL),
(157, 'Kaci', 'Erdman', 'f', 'default_f.svg', 'sean.prohaska@harber.com', NULL, NULL, NULL),
(158, 'Jamarcus', 'Kemmer', 'm', 'default.svg', 'alize.balistreri@dach.com', NULL, NULL, NULL),
(160, 'Mustafa', 'Romaguera', 'f', 'default.svg', 'kylee70@veum.net', NULL, NULL, NULL),
(162, 'Garnett', 'Champlin', 'm', 'default.svg', 'luettgen.khalid@kshlerin.com', NULL, NULL, NULL),
(168, 'Joannie', 'Koepp', 'm', 'default.svg', 'ihaag@medhurst.biz', '2017-03-19 20:50:46', '2017-03-24 20:30:49', NULL),
(170, 'Consuelo', 'Christiansen', 'm', 'default.svg', 'ogorczany@gmail.com', '2017-03-19 20:50:46', '2017-03-19 20:50:46', NULL),
(171, 'Camren', 'Wisoky', 'm', 'default_f.svg', 'nstracke@armstrong.com', '2017-03-19 20:50:46', '2017-03-19 20:50:46', NULL),
(178, 'Cooper', 'Hodkiewicz', 'f', 'default_f.svg', 'gunner87@grady.biz', '2017-03-19 21:27:07', '2017-03-22 16:28:47', NULL),
(179, 'Sincere', 'Gerlach', 'f', 'default_f.svg', 'dwintheiser@gmail.com', '2017-03-19 21:27:07', '2017-03-19 21:27:07', NULL),
(180, 'Vivian', 'Larson', 'f', '180.png', 'jkoelpin@metz.net', '2017-03-19 21:27:07', '2017-03-19 21:27:07', NULL),
(181, 'Rafaela', 'Wisozk', 'f', 'default_f.svg', 'polly.douglas@strosin.info', '2017-03-19 21:27:07', '2017-03-19 21:27:07', NULL),
(184, 'Bradly', 'Marquardt', 'f', 'default_f.svg', 'ebechtelar@gislason.com', '2017-03-19 21:27:07', '2017-03-19 21:27:07', NULL),
(203, 'Nia', 'Jenkins', 'm', 'default.svg', 'xcremin@hotmail.com', '2017-03-24 18:28:41', '2017-03-24 18:28:41', NULL),
(204, 'Nichole', 'Dickinson', 'm', 'default_f.svg', 'destini.farrell@schaefer.com', '2017-03-24 18:28:41', '2017-03-24 18:28:41', NULL),
(205, 'Aimee', 'Wilkinson', 'm', 'default_f.svg', 'oceane68@luettgen.com', '2017-03-24 18:28:41', '2017-03-24 18:28:41', NULL),
(206, 'Sheldon', 'Connelly', 'm', '206.png', 'lois74@yahoo.com', '2017-03-24 18:28:41', '2017-03-24 18:28:41', NULL),
(207, 'Guadalupe', 'Rath', 'm', 'default.svg', 'carlee.ferry@herzog.info', '2017-03-24 18:28:41', '2017-03-24 18:28:41', NULL),
(208, 'Skyla', 'Blanda', 'm', 'default_f.svg', 'amani57@gmail.com', '2017-03-24 18:28:41', '2017-03-24 18:28:41', NULL),
(209, 'Skye', 'Frami', 'm', 'default.svg', 'oral.cormier@yahoo.com', '2017-03-24 18:28:41', '2017-03-24 18:28:41', NULL),
(210, 'Duncan', 'Senger', 'm', '210.png', 'mcglynn.kenyatta@mclaughlin.biz', '2017-03-24 18:28:41', '2017-03-24 18:28:41', NULL),
(211, 'Reina', 'Powlowski', 'm', 'default_f.svg', 'cole.mittie@yahoo.com', '2017-03-24 18:28:41', '2017-03-24 18:28:41', NULL),
(212, 'Jade', 'Walter', 'm', '212.png', 'harmony18@wyman.com', '2017-03-24 18:28:41', '2017-03-24 18:28:41', NULL),
(213, 'Ward', 'Ortiz', 'm', 'default.svg', 'witting.ford@hotmail.com', '2017-03-24 18:33:45', '2017-03-24 18:33:45', NULL),
(214, 'Carson', 'Abbott', 'm', 'default.svg', 'duane.vandervort@hotmail.com', '2017-03-24 18:33:45', '2017-03-24 18:33:45', NULL),
(215, 'Wilber', 'Johnson', 'm', '215.png', 'carter.elwyn@gmail.com', '2017-03-24 18:33:45', '2017-03-24 18:33:45', NULL),
(216, 'Madyson', 'Kirlin', 'm', 'default_f.svg', 'kleffler@gmail.com', '2017-03-24 18:33:45', '2017-03-24 18:33:45', NULL),
(217, 'Tony', 'Tillman', 'm', 'default.svg', 'hessel.mitchel@yahoo.com', '2017-03-24 18:33:45', '2017-03-24 18:33:45', NULL),
(218, 'Annamae', 'Koss', 'm', '218.png', 'gusikowski.kathlyn@smith.com', '2017-03-24 18:33:45', '2017-03-24 18:33:45', NULL),
(219, 'Jacinto', 'Walker', 'm', 'default.svg', 'fdaniel@bartell.com', '2017-03-24 18:33:45', '2017-03-24 18:33:45', NULL),
(220, 'Emilia', 'Ortiz', 'm', 'default_f.svg', 'gutkowski.cory@yahoo.com', '2017-03-24 18:33:45', '2017-03-24 18:33:45', NULL),
(221, 'Wade', 'Klocko', 'm', 'default.svg', 'shemar93@gmail.com', '2017-03-24 18:33:45', '2017-03-24 18:33:45', NULL),
(222, 'Ola', 'Zulauf', 'm', 'default.svg', 'mnolan@konopelski.com', '2017-03-24 18:33:45', '2017-03-24 18:33:45', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=3 ;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE IF NOT EXISTS `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`),
  KEY `password_resets_token_index` (`token`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `password_resets`
--

INSERT INTO `password_resets` (`email`, `token`, `created_at`) VALUES
('roman@paprotsky.com', '$2y$10$S5/NAJ9sUlVFhE4KFYR9ZOjqXcjTIN7g06PYk4MDIEjvaVE/ANf6K', '2017-03-17 23:37:01');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=7 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
