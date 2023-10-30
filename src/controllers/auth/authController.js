import jwt from "jsonwebtoken";

/* const loginApi = (req,res) => {
    const {username,password} = req.query;
    const token = jwt.sign({user:username},process.env.JSON_SECRET,
    {expiresIn:"10min"});
    req.json({token});
} */

const login = (req,res) => {
    const {matricula,password} = req.body;
    //... comprobar que usuario existe y contraseña correcta
    req.session.user = matricula;
    res.redirect("/");
}

const loginForm = (req,res) => {
    res.render("auth/login");
}

const logout = (req,res)=>{
    req.session.destroy();
    res.redirect("/login");
}

export default{
    login,
    loginForm,
    logout,
}

