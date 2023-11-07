import { Router } from "express";

import parkingViewController from "../controllers/parking/parkingViewController.js";
import { isAuthenticated, isAdmin } from "../middlewares/authMiddleware.js";

const router = Router();

// Ruta para mostrar el formulario de aparcar
router.get('/aparcar', isAuthenticated, (req, res) => {
  parkingViewController.aparcarForm(req, res); // Llama a la función del controlador para mostrar el formulario
});

// Ruta para procesar el formulario de aparcamiento (POST)
router.post('/aparcar', isAuthenticated, async (req, res) => {
  // Obtén los datos del formulario de req.body
  const { cocheId, zonaId, fechaInicio } = req.body;

  // Llama a la función del controlador para procesar el formulario
  parkingViewController.aparcar(req, res, cocheId, zonaId, fechaInicio);
});

// Ruta para mostrar el formulario de desaparcar
router.get('/desaparcar', isAuthenticated, (req, res) => {
  parkingViewController.desaparcarForm(req, res); // Llama a la función del controlador para mostrar el formulario
});

// Ruta para procesar el formulario de desaparcamiento (POST)
router.post('/desaparcar', isAuthenticated, async (req, res) => {
  // Obtén los datos del formulario de req.body
  const { estacionamientoId, fechaFin } = req.body;

  // Llama a la función del controlador para procesar el formulario
  parkingViewController.desaparcar(req, res, estacionamientoId, fechaFin);
});

export default router;