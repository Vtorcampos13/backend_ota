import { Router } from "express";

import multasViewController from "../controllers/multas/multasViewController.js";
import {isAuthenticated,isAdmin} from "../middlewares/authMiddleware.js";


const router = Router();

router.get("/",isAuthenticated,(req,res)=>{
    multasViewController.getAll(req,res);
});

router.get("/new",multasViewController.createForm);

router.get("/:id",isAuthenticated,(req,res)=>{
    multasViewController.getById(req,res);
});

router.post("/",(req,res)=>{
    multasViewController.create(req,res);
});

router.get("/:id/edit",multasViewController.updateForm);

router.post("/:id",(req,res)=>{
    multasViewController.update(req,res);
});

router.get("/:id/delete",(req,res)=>{
    multasViewController.remove(req,res);
});

export default router;