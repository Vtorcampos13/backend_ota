import { Router } from "express";

import operariosViewController from "../controllers/operarios/operariosViewController.js";
import isAuthenticated from "../middlewares/authMiddleware.js";


const router = Router();

router.get("/",isAuthenticated,(req,res)=>{
    operariosViewController.getAll(req,res);
});

router.get("/:id",(req,res)=>{
    operariosViewController.getById(req,res);
});

router.get("/new",operariosViewController.createForm);

router.post("/",(req,res)=>{
    operariosViewController.create(req,res);
});

router.get("/:id/edit",operariosViewController.updateForm);

router.post("/:id",(req,res)=>{
    operariosViewController.update(req,res);
});

router.get("/:id/delete",(req,res)=>{
    operariosViewController.remove(req,res);
});

export default router;
