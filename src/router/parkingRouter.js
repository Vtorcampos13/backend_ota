import { Router } from "express";

import parkingViewController from "../controllers/parking/parkingViewController.js";
import {isAuthenticated,isAdmin} from "../middlewares/authMiddleware.js";
import {noHayParking,yaHayParking} from "../middlewares/parkingMiddleware.js";


const router = Router();



router.get("/",isAuthenticated,yaHayParking,(req,res)=>{
    parkingViewController.aparcarForm(req,res);
});

router.get("/felicidades",isAuthenticated,(req,res)=>{
    parkingViewController.felicidades(req,res);
});

router.get("/nofelicidades",isAuthenticated,(req,res)=>{
    parkingViewController.nofelicidades(req,res);
});

router.get("/errordesaparcar",(req,res)=>{
    parkingViewController.errordesaparcar(req,res);
});

router.get("/erroraparcar",(req,res)=>{
    parkingViewController.erroraparcar(req,res);
});

/* router.get("/new",(req,res) => {
    parkingViewController.createForm(req,res);   
})

router.get("/:id",(req,res)=>{
    parkingViewController.getById(req,res);
});

router.post("/",(req,res)=>{
    parkingViewController.create(req,res);
});

router.get("/:id/edit",parkingViewController.updateForm);

router.post("/:id",(req,res)=>{
    parkingViewController.update(req,res);
});

router.get("/:id/delete",(req,res)=>{
    parkingViewController.remove(req,res);
}); */

router.post("/aparcar",isAuthenticated,(req,res)=>{
    parkingViewController.aparcar(req,res);
});

router.post("/desaparcar",isAuthenticated,noHayParking,(req,res)=>{
    parkingViewController.desaparcar(req,res);
});

export default router;
