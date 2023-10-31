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

