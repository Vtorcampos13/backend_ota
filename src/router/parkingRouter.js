import { Router } from "express";

import parkingViewController from "../controllers/parking/parkingViewController.js";
import { isAuthenticated, isAdmin } from "../middlewares/authMiddleware.js";

const router = Router();



router.get("/",isAuthenticated,(req,res)=>{
    parkingViewController.aparcarForm(req,res);
});

router.get("/felicidades",isAuthenticated,(req,res)=>{
    parkingViewController.felicidades(req,res);
});

/* router.get("/new",(req,res) => {
    parkingViewController.createForm(req,res);   
})

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

router.get("/:id/delete",(req,res)=>{
    parkingViewController.remove(req,res);
}); */

router.post("/aparcar",isAuthenticated,(req,res)=>{
    parkingViewController.aparcar(req,res);
});

router.post("/desaparcar",isAuthenticated,(req,res)=>{
    parkingViewController.desaparcar(req,res);
});

export default router;
