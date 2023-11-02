import { Router } from "express";

import parkingViewController from "../controllers/parking/parkingViewController.js";
import isAuthenticated from "../middlewares/authMiddleware.js";


const router = Router();

router.get("/",isAuthenticated,(req,res)=>{
    parkingViewController.getAll(req,res);
});

router.get("/:id",(req,res)=>{
    parkingViewController.getById(req,res);
});

router.get("/new",parkingViewController.createForm);

router.post("/",(req,res)=>{
    parkingViewController.create(req,res);
});

router.get("/:id/edit",parkingViewController.updateForm);

router.post("/:id",(req,res)=>{
    parkingViewController.update(req,res);
});

router.get("/:id/delete",(req,res)=>{
    parkingViewController.remove(req,res);
});

export default router;
