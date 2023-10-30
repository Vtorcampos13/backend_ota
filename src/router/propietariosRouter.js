import { Router } from "express";

import propietariosViewController from "../controllers/propietarios/propietariosViewController.js";
import isAuthenticated from "../middlewares/authMiddleware.js";


const router = Router();

router.get("/",isAuthenticated,(req,res)=>{
    propietariosViewController.getAll(req,res);
});

router.get("/:id",(req,res)=>{
    propietariosViewController.getById(req,res);
});

router.get("/new",propietariosViewController.createForm);

router.post("/",(req,res)=>{
    propietariosViewController.create(req,res);
});

router.get("/:id/edit",propietariosViewController.updateForm);

router.post("/:id",(req,res)=>{
    propietariosViewController.update(req,res);
});

router.get("/:id/delete",(req,res)=>{
    propietariosViewController.remove(req,res);
});

export default router;
