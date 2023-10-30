import propietariosController from "./propietariosController.js";

const getAll = (req,res) => {
    const [error, propietarios] = propietariosController.getAll();
    res.render("propietarios/list",{error,propietarios}); 
}

const getById = (req,res) => {
    const id = req.params.id;
    const [error, propietario] = propietariosController.getById();
    res.render("propietarios/list",{error,propietario}); 
}

const createForm = (req,res)=>{
    const error = req.query.error;
    res.render("propietarios/new",{error});
}

const create = (req,res) =>{
    const {nombre,apellido,email} = req.body;
    const [error,propietario] = propietariosController.create(nombre,apellido,email);
    if(error){
        const uriError = encodeURIComponent(error);
        return res.redirect(`/propietarios/new?error=${uriError}`)
    }
    res.redirect("/propietarios");
}

const updateForm = (req,res) =>{
    const errorMessage = req.query.error;
    const id = req.params.id;
    const [error,propietario] = propietariosController.getById(id);
    if(error){
        res.redirect("/propietarios");
    }
    res.render("propietarios/edit",{error:errorMessage,propietario});
}

const update = (req,res) =>{
    const id = req.params.id;
    const {nombre,apellido,email} = req.body;
    const [error,propietario] = propietariosController.update(id,nombre,apellido,email);
    if(error){
        const uriError = encodeURIComponent(error);
        return res.redirect(`/propietarios/${id}/edit?error=${uriError}`)
    }
    res.redirect(`/propietarios/${id}`);
};

const remove = (req,res)=>{
    const id = req.params.id;
    const [error,propietario] = propietariosController.remove(id);
    res.redirect("/propietarios");
}

export default{
    getAll,
    getById,
    create,
    createForm,
    update,
    updateForm,
    remove
};



