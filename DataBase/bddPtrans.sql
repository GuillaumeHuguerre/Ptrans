-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jun 11, 2020 at 12:49 PM
-- Server version: 5.7.25
-- PHP Version: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bddPtrans`
--

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `id_event` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `titre` varchar(500) NOT NULL,
  `description` varchar(500) NOT NULL,
  `debut` varchar(500) NOT NULL,
  `fin` varchar(500) NOT NULL,
  `allDay` tinyint(1) NOT NULL,
  `Type` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id_event`, `id_user`, `titre`, `description`, `debut`, `fin`, `allDay`, `Type`) VALUES
(1, 0, 'TP', 'Patrons de conception logicielle', 'Mon Jan 06 2020 09:45:00 GMT 0100 (heure normale d’Europe centrale)', 'Mon Jan 06 2020 11:15:00 GMT 0100 (heure normale d’Europe centrale)', 0, 'Travail'),
(2, 0, 'TP', 'Mini-projet d\'intelligence artificielle', 'Tue Jan 07 2020 14:00:00 GMT 0100 (heure normale d’Europe centrale)', 'Tue Jan 07 2020 15:30:00 GMT 0100 (heure normale d’Europe centrale)', 0, 'Travail'),
(3, 0, 'Projet', 'Projet Hyblab : données, web et interdisciplinarit', 'Thu Jan 09 2020 09:30:00 GMT 0100 (heure normale d’Europe centrale)', 'Thu Jan 09 2020 12:30:00 GMT 0100 (heure normale d’Europe centrale)', 0, 'Travail'),
(4, 0, 'TP', 'Patrons de conception logicielle', 'Wed Jan 08 2020 08:00:00 GMT 0100 (heure normale d’Europe centrale)', 'Wed Jan 08 2020 09:30:00 GMT 0100 (heure normale d’Europe centrale)', 0, 'Travail'),
(5, 0, 'CM', 'Test, intégration et déploiement logiciels', 'Mon Jan 13 2020 08:15:00 GMT 0100 (heure normale d’Europe centrale)', 'Mon Jan 13 2020 09:30:00 GMT 0100 (heure normale d’Europe centrale)', 0, 'Travail'),
(6, 0, 'CM', 'Introduction aux théories de la calculabilité et d', 'Tue Jan 14 2020 08:15:00 GMT 0100 (heure normale d’Europe centrale)', 'Tue Jan 14 2020 09:30:00 GMT 0100 (heure normale d’Europe centrale)', 0, 'Travail'),
(7, 0, 'Projet', 'Projet Hyblab : données, web et interdisciplinarit', 'Thu Jan 16 2020 09:00:00 GMT 0100 (heure normale d’Europe centrale)', 'Thu Jan 16 2020 12:00:00 GMT 0100 (heure normale d’Europe centrale)', 0, 'Travail'),
(8, 0, 'Projet', 'Projet Hyblab : données, web et interdisciplinarit', 'Wed Jan 15 2020 09:00:00 GMT 0100 (heure normale d’Europe centrale)', 'Wed Jan 15 2020 12:00:00 GMT 0100 (heure normale d’Europe centrale)', 0, 'Travail'),
(9, 0, 'CM', 'Extraction de connaissances dans les données', 'Mon Jan 20 2020 08:15:00 GMT 0100 (heure normale d’Europe centrale)', 'Mon Jan 20 2020 09:30:00 GMT 0100 (heure normale d’Europe centrale)', 0, 'Travail'),
(10, 0, 'CM', 'Outils pour le développement du logiciel', 'Tue Jan 21 2020 08:00:00 GMT 0100 (heure normale d’Europe centrale)', 'Tue Jan 21 2020 09:30:00 GMT 0100 (heure normale d’Europe centrale)', 0, 'Travail'),
(11, 0, 'CM', 'Inférence logique', 'Wed Jan 22 2020 08:15:00 GMT 0100 (heure normale d’Europe centrale)', 'Wed Jan 22 2020 09:30:00 GMT 0100 (heure normale d’Europe centrale)', 0, 'Travail'),
(12, 0, 'CM', 'Extraction de connaissances dans les données', 'Thu Jan 23 2020 08:15:00 GMT 0100 (heure normale d’Europe centrale)', 'Thu Jan 23 2020 09:30:00 GMT 0100 (heure normale d’Europe centrale)', 0, 'Travail'),
(13, 0, 'TD anglais', 'Civilisation et prise de parole', 'Mon Jan 27 2020 09:45:00 GMT 0100 (heure normale d’Europe centrale)', 'Mon Jan 27 2020 11:15:00 GMT 0100 (heure normale d’Europe centrale)', 0, 'Travail'),
(14, 0, 'CM', 'Conception des bases et entrepôts de données', 'Thu Jan 30 2020 09:45:00 GMT 0100 (heure normale d’Europe centrale)', 'Thu Jan 30 2020 11:00:00 GMT 0100 (heure normale d’Europe centrale)', 0, 'Travail'),
(15, 0, 'Projet', 'Projet Hyblab : données, web et interdisciplinarit', 'Tue Jan 28 2020 09:00:00 GMT 0100 (heure normale d’Europe centrale)', 'Tue Jan 28 2020 12:00:00 GMT 0100 (heure normale d’Europe centrale)', 0, 'Travail'),
(16, 0, 'TD', 'Introduction aux théories de la calculabilité et d', 'Wed Jan 29 2020 11:15:00 GMT 0100 (heure normale d’Europe centrale)', 'Wed Jan 29 2020 12:45:00 GMT 0100 (heure normale d’Europe centrale)', 0, 'Travail'),
(17, 0, 'TD', 'Introduction aux théories de la calculabilité et d', 'Mon Feb 03 2020 08:00:00 GMT 0100 (heure normale d’Europe centrale)', 'Mon Feb 03 2020 09:30:00 GMT 0100 (heure normale d’Europe centrale)', 0, 'Travail'),
(18, 0, 'TD', 'Education physique et sportive 4', 'Tue Feb 04 2020 10:00:00 GMT 0100 (heure normale d’Europe centrale)', 'Tue Feb 04 2020 12:00:00 GMT 0100 (heure normale d’Europe centrale)', 0, 'Travail'),
(19, 0, 'TD', 'Inférence logique', 'Wed Feb 05 2020 08:00:00 GMT 0100 (heure normale d’Europe centrale)', 'Wed Feb 05 2020 09:30:00 GMT 0100 (heure normale d’Europe centrale)', 0, 'Travail'),
(20, 0, 'Projet', 'Projet Hyblab : données, web et interdisciplinarit', 'Thu Feb 06 2020 09:00:00 GMT 0100 (heure normale d’Europe centrale)', 'Thu Feb 06 2020 12:00:00 GMT 0100 (heure normale d’Europe centrale)', 0, 'Travail'),
(21, 0, 'CM', 'Systèmes de raisonnement probabiliste', 'Mon Feb 10 2020 08:15:00 GMT 0100 (heure normale d’Europe centrale)', 'Mon Feb 10 2020 09:30:00 GMT 0100 (heure normale d’Europe centrale)', 0, 'Travail'),
(22, 0, 'CM', 'Extraction de connaissances dans les données', 'Tue Feb 11 2020 08:15:00 GMT 0100 (heure normale d’Europe centrale)', 'Tue Feb 11 2020 09:30:00 GMT 0100 (heure normale d’Europe centrale)', 0, 'Travail'),
(23, 0, 'CM', 'Conception des bases et entrepôts de données', 'Wed Feb 12 2020 08:15:00 GMT 0100 (heure normale d’Europe centrale)', 'Wed Feb 12 2020 09:30:00 GMT 0100 (heure normale d’Europe centrale)', 0, 'Travail'),
(24, 0, 'Projet', 'Projet Hyblab : données, web et interdisciplinarit', 'Thu Feb 13 2020 09:30:00 GMT 0100 (heure normale d’Europe centrale)', 'Thu Feb 13 2020 12:30:00 GMT 0100 (heure normale d’Europe centrale)', 0, 'Travail'),
(25, 0, 'TD anglais', 'Civilisation et prise de parole', 'Mon Feb 17 2020 09:45:00 GMT 0100 (heure normale d’Europe centrale)', 'Mon Feb 17 2020 11:15:00 GMT 0100 (heure normale d’Europe centrale)', 0, 'Travail'),
(26, 0, 'Projet', 'Projet transversal', 'Wed Feb 19 2020 08:30:00 GMT 0100 (heure normale d’Europe centrale)', 'Wed Feb 19 2020 12:30:00 GMT 0100 (heure normale d’Europe centrale)', 0, 'Travail'),
(27, 0, 'Examens', 'Inférence logique', 'Tue Feb 18 2020 09:00:00 GMT 0100 (heure normale d’Europe centrale)', 'Tue Feb 18 2020 10:30:00 GMT 0100 (heure normale d’Europe centrale)', 0, 'Travail'),
(28, 0, 'CM', 'Systèmes de raisonnement probabiliste', 'Thu Feb 20 2020 08:15:00 GMT 0100 (heure normale d’Europe centrale)', 'Thu Feb 20 2020 09:30:00 GMT 0100 (heure normale d’Europe centrale)', 0, 'Travail'),
(29, 0, 'Vacances', '', 'Mon Feb 24 2020 07:30:00 GMT 0100 (heure normale d’Europe centrale)', 'Mon Feb 24 2020 22:00:00 GMT 0100 (heure normale d’Europe centrale)', 0, 'Travail'),
(30, 0, 'Vacances', '', 'Tue Feb 25 2020 07:30:00 GMT 0100 (heure normale d’Europe centrale)', 'Tue Feb 25 2020 22:00:00 GMT 0100 (heure normale d’Europe centrale)', 0, 'Travail'),
(31, 0, 'Vacances', '', 'Wed Feb 26 2020 07:30:00 GMT 0100 (heure normale d’Europe centrale)', 'Wed Feb 26 2020 22:00:00 GMT 0100 (heure normale d’Europe centrale)', 0, 'Travail'),
(32, 0, 'Vacances', '', 'Thu Feb 27 2020 07:30:00 GMT 0100 (heure normale d’Europe centrale)', 'Thu Feb 27 2020 22:00:00 GMT 0100 (heure normale d’Europe centrale)', 0, 'Travail'),
(33, 0, 'TD', 'Education physique et sportive 4', 'Tue Mar 03 2020 10:00:00 GMT 0100 (heure normale d’Europe centrale)', 'Tue Mar 03 2020 12:00:00 GMT 0100 (heure normale d’Europe centrale)', 0, 'Travail'),
(34, 0, 'TD anglais', 'Civilisation et prise de parole', 'Mon Mar 02 2020 09:45:00 GMT 0100 (heure normale d’Europe centrale)', 'Mon Mar 02 2020 11:15:00 GMT 0100 (heure normale d’Europe centrale)', 0, 'Travail'),
(35, 0, 'Soutenance', '', 'Thu Mar 05 2020 08:00:00 GMT 0100 (heure normale d’Europe centrale)', 'Thu Mar 05 2020 19:00:00 GMT 0100 (heure normale d’Europe centrale)', 0, 'Travail'),
(36, 0, 'Soutenance', '', 'Wed Mar 04 2020 08:00:00 GMT 0100 (heure normale d’Europe centrale)', 'Wed Mar 04 2020 15:00:00 GMT 0100 (heure normale d’Europe centrale)', 0, 'Travail'),
(37, 0, 'CM', 'Gestion informatique des connaissances', 'Mon Mar 09 2020 08:15:00 GMT 0100 (heure normale d’Europe centrale)', 'Mon Mar 09 2020 09:30:00 GMT 0100 (heure normale d’Europe centrale)', 0, 'Travail'),
(38, 0, 'CM', 'Gestion informatique des connaissances', 'Thu Mar 12 2020 09:45:00 GMT 0100 (heure normale d’Europe centrale)', 'Thu Mar 12 2020 11:00:00 GMT 0100 (heure normale d’Europe centrale)', 0, 'Travail'),
(39, 0, 'CM', 'Conception des bases et entrepôts de données', 'Tue Mar 10 2020 08:15:00 GMT 0100 (heure normale d’Europe centrale)', 'Tue Mar 10 2020 09:30:00 GMT 0100 (heure normale d’Europe centrale)', 0, 'Travail'),
(40, 0, 'CM', 'Gestion informatique des connaissances', 'Wed Mar 11 2020 09:45:00 GMT 0100 (heure normale d’Europe centrale)', 'Wed Mar 11 2020 11:00:00 GMT 0100 (heure normale d’Europe centrale)', 0, 'Travail'),
(41, 0, 'CM', 'Gestion informatique des connaissances', 'Mon Mar 16 2020 08:15:00 GMT 0100 (heure normale d’Europe centrale)', 'Mon Mar 16 2020 09:30:00 GMT 0100 (heure normale d’Europe centrale)', 0, 'Travail'),
(42, 0, 'CM', 'Démarche qualité,Méthode d\'analyse,résolution prob', 'Wed Mar 18 2020 08:00:00 GMT 0100 (heure normale d’Europe centrale)', 'Wed Mar 18 2020 11:15:00 GMT 0100 (heure normale d’Europe centrale)', 0, 'Travail'),
(43, 0, 'CM', 'Démarche qualité,Méthode d\'analyse,résolution prob', 'Thu Mar 19 2020 08:00:00 GMT 0100 (heure normale d’Europe centrale)', 'Thu Mar 19 2020 13:00:00 GMT 0100 (heure normale d’Europe centrale)', 0, 'Travail'),
(44, 0, 'CM', 'Gestion informatique des connaissances', 'Tue Mar 17 2020 08:15:00 GMT 0100 (heure normale d’Europe centrale)', 'Tue Mar 17 2020 09:30:00 GMT 0100 (heure normale d’Europe centrale)', 0, 'Travail'),
(45, 0, 'CM', 'Mathématiques Financières', 'Mon Mar 23 2020 08:15:00 GMT 0100 (heure normale d’Europe centrale)', 'Mon Mar 23 2020 09:30:00 GMT 0100 (heure normale d’Europe centrale)', 0, 'Travail'),
(46, 0, 'CM', 'Conception des bases et entrepôts de données', 'Tue Mar 24 2020 08:15:00 GMT 0100 (heure normale d’Europe centrale)', 'Tue Mar 24 2020 09:30:00 GMT 0100 (heure normale d’Europe centrale)', 0, 'Travail'),
(47, 0, 'CM', 'Gestion informatique des connaissances', 'Wed Mar 25 2020 08:15:00 GMT 0100 (heure normale d’Europe centrale)', 'Wed Mar 25 2020 09:30:00 GMT 0100 (heure normale d’Europe centrale)', 0, 'Travail'),
(48, 0, 'CM', 'Découverte de monde de la recherche', 'Thu Mar 26 2020 08:15:00 GMT 0100 (heure normale d’Europe centrale)', 'Thu Mar 26 2020 09:30:00 GMT 0100 (heure normale d’Europe centrale)', 0, 'Travail'),
(49, 0, 'CM', 'Découverte de monde de la recherche', 'Mon Mar 30 2020 08:15:00 GMT 0200 (heure d’été d’Europe centrale)', 'Mon Mar 30 2020 09:30:00 GMT 0200 (heure d’été d’Europe centrale)', 0, 'Travail'),
(50, 0, 'CM', 'Gestion informatique des connaissances', 'Tue Mar 31 2020 08:15:00 GMT 0200 (heure d’été d’Europe centrale)', 'Tue Mar 31 2020 09:30:00 GMT 0200 (heure d’été d’Europe centrale)', 0, 'Travail'),
(51, 0, 'Réunion', 'Découverte de monde de la recherche', 'Wed Apr 01 2020 08:00:00 GMT 0200 (heure d’été d’Europe centrale)', 'Wed Apr 01 2020 13:00:00 GMT 0200 (heure d’été d’Europe centrale)', 0, 'Travail'),
(52, 0, 'TD', 'Gestion informatique des connaissances', 'Thu Apr 02 2020 08:00:00 GMT 0200 (heure d’été d’Europe centrale)', 'Thu Apr 02 2020 09:30:00 GMT 0200 (heure d’été d’Europe centrale)', 0, 'Travail'),
(53, 0, 'TD', 'Gestion informatique des connaissances', 'Mon Apr 06 2020 08:00:00 GMT 0200 (heure d’été d’Europe centrale)', 'Mon Apr 06 2020 09:30:00 GMT 0200 (heure d’été d’Europe centrale)', 0, 'Travail'),
(54, 0, 'TD', 'Gestion informatique des connaissances', 'Wed Apr 08 2020 08:00:00 GMT 0200 (heure d’été d’Europe centrale)', 'Wed Apr 08 2020 09:30:00 GMT 0200 (heure d’été d’Europe centrale)', 0, 'Travail'),
(55, 0, 'TD', 'Gestion informatique des connaissances', 'Tue Apr 07 2020 08:00:00 GMT 0200 (heure d’été d’Europe centrale)', 'Tue Apr 07 2020 09:30:00 GMT 0200 (heure d’été d’Europe centrale)', 0, 'Travail'),
(56, 0, 'TP', 'Conception des bases et entrepôts de données', 'Thu Apr 09 2020 08:00:00 GMT 0200 (heure d’été d’Europe centrale)', 'Thu Apr 09 2020 09:30:00 GMT 0200 (heure d’été d’Europe centrale)', 0, 'Travail'),
(57, 0, 'Férié', '', 'Mon Apr 13 2020 07:30:00 GMT 0200 (heure d’été d’Europe centrale)', 'Mon Apr 13 2020 22:00:00 GMT 0200 (heure d’été d’Europe centrale)', 0, 'Travail'),
(58, 0, 'TP', 'Gestion informatique des connaissances', 'Wed Apr 15 2020 08:00:00 GMT 0200 (heure d’été d’Europe centrale)', 'Wed Apr 15 2020 09:30:00 GMT 0200 (heure d’été d’Europe centrale)', 0, 'Travail'),
(59, 0, 'Examens', 'Découverte de monde de la recherche', 'Tue Apr 14 2020 08:30:00 GMT 0200 (heure d’été d’Europe centrale)', 'Tue Apr 14 2020 09:00:00 GMT 0200 (heure d’été d’Europe centrale)', 0, 'Travail'),
(60, 0, 'TP', 'Gestion informatique des connaissances', 'Thu Apr 16 2020 08:00:00 GMT 0200 (heure d’été d’Europe centrale)', 'Thu Apr 16 2020 09:30:00 GMT 0200 (heure d’été d’Europe centrale)', 0, 'Travail'),
(61, 0, 'TP', 'Conception des bases et entrepôts de données', 'Fri Apr 17 2020 08:00:00 GMT 0200 (heure d’été d’Europe centrale)', 'Fri Apr 17 2020 09:30:00 GMT 0200 (heure d’été d’Europe centrale)', 0, 'Travail'),
(62, 0, 'Vacances', '', 'Mon Apr 20 2020 07:30:00 GMT 0200 (heure d’été d’Europe centrale)', 'Mon Apr 20 2020 22:00:00 GMT 0200 (heure d’été d’Europe centrale)', 0, 'Travail'),
(63, 0, 'Vacances', '', 'Tue Apr 21 2020 07:30:00 GMT 0200 (heure d’été d’Europe centrale)', 'Tue Apr 21 2020 22:00:00 GMT 0200 (heure d’été d’Europe centrale)', 0, 'Travail'),
(64, 0, 'Vacances', '', 'Thu Apr 23 2020 07:30:00 GMT 0200 (heure d’été d’Europe centrale)', 'Thu Apr 23 2020 22:00:00 GMT 0200 (heure d’été d’Europe centrale)', 0, 'Travail'),
(65, 0, 'Vacances', '', 'Wed Apr 22 2020 07:30:00 GMT 0200 (heure d’été d’Europe centrale)', 'Wed Apr 22 2020 22:00:00 GMT 0200 (heure d’été d’Europe centrale)', 0, 'Travail'),
(66, 0, 'Indisponible', '', 'Tue Apr 28 2020 07:30:00 GMT 0200 (heure d’été d’Europe centrale)', 'Tue Apr 28 2020 22:00:00 GMT 0200 (heure d’été d’Europe centrale)', 0, 'Travail'),
(67, 0, 'Indisponible', '', 'Mon Apr 27 2020 07:30:00 GMT 0200 (heure d’été d’Europe centrale)', 'Mon Apr 27 2020 22:00:00 GMT 0200 (heure d’été d’Europe centrale)', 0, 'Travail'),
(68, 0, 'Indisponible', '', 'Wed Apr 29 2020 07:30:00 GMT 0200 (heure d’été d’Europe centrale)', 'Wed Apr 29 2020 22:00:00 GMT 0200 (heure d’été d’Europe centrale)', 0, 'Travail'),
(69, 0, 'Indisponible', '', 'Thu Apr 30 2020 07:30:00 GMT 0200 (heure d’été d’Europe centrale)', 'Thu Apr 30 2020 22:00:00 GMT 0200 (heure d’été d’Europe centrale)', 0, 'Travail'),
(70, 0, 'Examens', 'Réseaux de neurones avancés', 'Mon May 04 2020 10:00:00 GMT 0200 (heure d’été d’Europe centrale)', 'Mon May 04 2020 11:30:00 GMT 0200 (heure d’été d’Europe centrale)', 0, 'Travail'),
(71, 0, 'TD', 'Education physique et sportive 4', 'Tue May 05 2020 10:00:00 GMT 0200 (heure d’été d’Europe centrale)', 'Tue May 05 2020 12:00:00 GMT 0200 (heure d’été d’Europe centrale)', 0, 'Travail'),
(72, 0, 'Examens', 'Gestion informatique des connaissances', 'Wed May 06 2020 08:00:00 GMT 0200 (heure d’été d’Europe centrale)', 'Wed May 06 2020 09:30:00 GMT 0200 (heure d’été d’Europe centrale)', 0, 'Travail'),
(73, 0, 'Soutenance', '', 'Mon May 11 2020 08:00:00 GMT 0200 (heure d’été d’Europe centrale)', 'Mon May 11 2020 19:00:00 GMT 0200 (heure d’été d’Europe centrale)', 0, 'Travail'),
(74, 0, 'TD', 'Education physique et sportive 4', 'Tue May 12 2020 10:00:00 GMT 0200 (heure d’été d’Europe centrale)', 'Tue May 12 2020 12:00:00 GMT 0200 (heure d’été d’Europe centrale)', 0, 'Travail'),
(75, 0, 'Soutenance', '', 'Wed May 13 2020 08:00:00 GMT 0200 (heure d’été d’Europe centrale)', 'Wed May 13 2020 19:00:00 GMT 0200 (heure d’été d’Europe centrale)', 0, 'Travail'),
(76, 0, 'Férié', '', 'Thu May 21 2020 07:30:00 GMT 0200 (heure d’été d’Europe centrale)', 'Thu May 21 2020 22:00:00 GMT 0200 (heure d’été d’Europe centrale)', 0, 'Travail'),
(77, 0, 'Férié', '', 'Mon Jun 01 2020 07:30:00 GMT 0200 (heure d’été d’Europe centrale)', 'Mon Jun 01 2020 22:00:00 GMT 0200 (heure d’été d’Europe centrale)', 0, 'Travail'),
(78, 0, 'Férié', '', 'Tue Jul 14 2020 07:30:00 GMT 0200 (heure d’été d’Europe centrale)', 'Tue Jul 14 2020 22:00:00 GMT 0200 (heure d’été d’Europe centrale)', 0, 'Travail');

-- --------------------------------------------------------

--
-- Table structure for table `todolist`
--

CREATE TABLE `todolist` (
  `id_item` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `titre` varchar(255) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `etat` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `todolist`
--

INSERT INTO `todolist` (`id_item`, `id_user`, `titre`, `description`, `etat`) VALUES
(11, 0, 'titre', 'descr', 'A faire'),
(12, 0, 'titre2', 'dexription test', 'Commencé'),
(13, 0, 'titre test', 'description test', 'A faire');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id_user` int(11) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `mail` varchar(500) NOT NULL,
  `mdp` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id_user`, `nom`, `prenom`, `mail`, `mdp`) VALUES
(11, 'domi', 'hugo', 'hugo@gmail.com', '68d9e146cef587bb0211e8b7e9f2f2c56878248091fba26f7c0f9d4f02ab32b74caf4e9cb51103e111cdbe316f5797b3b7edfb69b2e56e53d3a6635b7986c60a'),
(12, 'test', 'test2', 'a@a', '3c9909afec25354d551dae21590bb26e38d53f2173b8d3dc3eee4c047e7ab1c1eb8b85103e3be7ba613b31bb5c9c36214dc9f14a42fd7a2fdb84856bca5c44c2');

-- --------------------------------------------------------

--
-- Table structure for table `views`
--

CREATE TABLE `views` (
  `user_id` int(11) NOT NULL,
  `view_id` int(11) NOT NULL,
  `nom` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id_event`,`id_user`);

--
-- Indexes for table `todolist`
--
ALTER TABLE `todolist`
  ADD PRIMARY KEY (`id_item`,`id_user`) USING BTREE;

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`),
  ADD UNIQUE KEY `mail` (`mail`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id_event` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=79;

--
-- AUTO_INCREMENT for table `todolist`
--
ALTER TABLE `todolist`
  MODIFY `id_item` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
