-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-08-2020 a las 03:41:36
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.2.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mision_vida`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `imprimirVariable` ()  BEGIN
    	DECLARE variable INT;
        SET variable = 5;
        SELECT variable;
    END$$

--
-- Funciones
--
CREATE DEFINER=`root`@`localhost` FUNCTION `sumarNumeros` (`num1` INT, `num2` INT) RETURNS INT(11) BEGIN
    	DECLARE suma INT;
        SET suma = num1 + num2;
        RETURN suma;
    END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `diezmos`
--

CREATE TABLE `diezmos` (
  `id_diezmo` int(11) NOT NULL,
  `id_persona` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `cantidad` int(20) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `diezmos`
--

INSERT INTO `diezmos` (`id_diezmo`, `id_persona`, `fecha`, `cantidad`, `created_at`) VALUES
(2, 8, '2020-03-17', 80000, '2020-04-19 15:48:04'),
(3, 10, '2020-04-19', 50000, '2020-04-19 18:21:38'),
(4, 11, '2020-04-19', 40000, '2020-04-19 18:21:59'),
(10, 8, '2020-08-09', 50000, '2020-08-09 14:55:21');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ofrendas`
--

CREATE TABLE `ofrendas` (
  `id_ofrenda` int(11) NOT NULL,
  `id_persona` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `cantidad` int(20) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `ofrendas`
--

INSERT INTO `ofrendas` (`id_ofrenda`, `id_persona`, `fecha`, `cantidad`, `created_at`) VALUES
(1, 8, '2020-04-23', 20000, '2020-04-23 22:47:41'),
(2, 10, '2020-03-01', 2000, '2020-04-23 23:03:59'),
(3, 10, '2020-08-09', 30000, '2020-08-09 14:49:04'),
(4, 1, '2020-08-09', 30000, '2020-08-09 14:49:36');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personas`
--

CREATE TABLE `personas` (
  `id` int(11) NOT NULL,
  `cedula` varchar(12) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `nombre` varchar(50) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `apellido1` varchar(50) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `apellido2` varchar(50) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `nacimiento` date NOT NULL,
  `telefono` varchar(10) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `correo` varchar(50) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `direccion` varchar(50) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `ciudad` varchar(30) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `personas`
--

INSERT INTO `personas` (`id`, `cedula`, `nombre`, `apellido1`, `apellido2`, `nacimiento`, `telefono`, `correo`, `direccion`, `ciudad`, `fecha_creacion`) VALUES
(1, '1112495038', 'JUAN JOSE', 'CAICEDO ', 'ARARAT', '1998-08-13', '3235121557', 'juanjosecaicedo6@gmail.com', 'calle 9a #3-29', 'JAMUNDI', '2020-03-14 00:00:00'),
(8, '111295038', 'JUAN DAVID', 'SOLIS', 'PARRA', '2020-03-01', '433312255', 'deyvidsolis16@gmail.com', 'calle 9a #3-29', 'CALI', '2020-03-14 00:00:00'),
(10, '34680245', 'DISNEY', 'ARARAT', 'BALANTA', '1967-02-28', '3212133', 'disney@mail.com', 'FILO', 'HONDURAS', '2020-03-14 09:49:42'),
(11, '1002885179', 'JUAN PABLO', 'DIAZ', 'CAICEDO', '2000-02-17', '3204802000', 'juanpablo@gmail.com', 'Cr 18 #10B-13', 'SANTADER', '2020-04-07 13:15:49'),
(12, '1002884929', 'ANTONIO 11', 'SALINAS', 'SOLIS', '1999-10-23', '321211121', 'antonio@gmail.com', 'FILO', 'HONDURAS', '2020-08-09 11:10:16');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `protemplo`
--

CREATE TABLE `protemplo` (
  `id_protemplo` int(11) NOT NULL,
  `id_persona` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `cantidad` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `protemplo`
--

INSERT INTO `protemplo` (`id_protemplo`, `id_persona`, `fecha`, `cantidad`, `created_at`) VALUES
(1, 10, '2020-04-23', 200000, '2020-04-23 23:09:43'),
(3, 8, '2020-08-09', 30000, '2020-08-09 15:05:48');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `id_persona` int(11) NOT NULL,
  `usuario` varchar(50) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `password` varchar(100) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `rol` varchar(30) COLLATE utf8mb4_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `id_persona`, `usuario`, `password`, `rol`) VALUES
(1, 1, 'juan', '123', '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `diezmos`
--
ALTER TABLE `diezmos`
  ADD PRIMARY KEY (`id_diezmo`);

--
-- Indices de la tabla `ofrendas`
--
ALTER TABLE `ofrendas`
  ADD PRIMARY KEY (`id_ofrenda`);

--
-- Indices de la tabla `personas`
--
ALTER TABLE `personas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `protemplo`
--
ALTER TABLE `protemplo`
  ADD PRIMARY KEY (`id_protemplo`),
  ADD UNIQUE KEY `id_persona` (`id_persona`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_personas` (`id_persona`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `diezmos`
--
ALTER TABLE `diezmos`
  MODIFY `id_diezmo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `ofrendas`
--
ALTER TABLE `ofrendas`
  MODIFY `id_ofrenda` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `personas`
--
ALTER TABLE `personas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `protemplo`
--
ALTER TABLE `protemplo`
  MODIFY `id_protemplo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`id_persona`) REFERENCES `personas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
