import { Router } from "express";

import cochesViewController from "../controllers/coches/cochesViewController.js";
import { isAuthenticated, isAdmin } from "../middlewares/authMiddleware.js";
import adminViewController from "../controllers/admin/adminViewController.js";
import authController from "../controllers/auth/authController.js"


const router = Router();

router.get("/",isAdmin,(req,res)=>{
    adminViewController.getAll(req,res);
});

router.get("/login",(req,res)=>{
    authController.adminLoginForm(req,res);
})

router.post("/login",(req,res)=>{
    authController.adminLogin(req,res);
})



router.get("/:id",isAuthenticated,(req,res)=>{
    cochesViewController.getById(req,res);
});

router.get("/new",cochesViewController.createForm);

router.post("/",(req,res)=>{
    cochesViewController.create(req,res);
});

router.get("/:id/edit",cochesViewController.updateForm);

router.post("/:id",(req,res)=>{
    cochesViewController.update(req,res);
});

router.get("/:id/delete",(req,res)=>{
    cochesViewController.remove(req,res);
});

export default router;
