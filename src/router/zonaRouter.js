import { Router } from "express";

import zonaViewController from "../controllers/zona/zonaViewController.js";
import isAuthenticated from "../middlewares/authMiddleware.js";


const router = Router();

router.get("/",isAuthenticated,(req,res)=>{
    zonaViewController.getAll(req,res);
});

router.get("/:id",(req,res)=>{
    zonaViewController.getById(req,res);
});

router.get("/new",zonaViewController.createForm);

router.post("/",(req,res)=>{
    zonaViewController.create(req,res);
});

router.get("/:id/edit",zonaViewController.updateForm);

router.post("/:id",(req,res)=>{
    zonaViewController.update(req,res);
});

router.get("/:id/delete",(req,res)=>{
    zonaViewController.remove(req,res);
});

export default router;
