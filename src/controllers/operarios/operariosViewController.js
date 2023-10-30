import operariosController from "./operariosController.js";

const getAll = (req,res) => {
    const [error, operarios] = operariosController.getAll();
    res.render("operarios/list",{error,operarios}); 
}

const getById = (req,res) => {
    const id = req.params.id;
    const [error, operario] = operariosController.getById();
    res.render("operarios/list",{error,operario}); 
}

const createForm = (req,res)=>{
    const error = req.query.error;
    res.render("operarios/new",{error});
}

const create = (req,res) =>{
    const {nombre,apellido} = req.body;
    const [error,operario] = operariosController.create(nombre,apellido);
    if(error){
        const uriError = encodeURIComponent(error);
        return res.redirect(`/operarios/new?error=${uriError}`)
    }
    res.redirect("/operarios");
}

const updateForm = (req,res) =>{
    const errorMessage = req.query.error;
    const id = req.params.id;
    const [error,operario] = operariosController.getById(id);
    if(error){
        res.redirect("/operarios");
    }
    res.render("operarios/edit",{error:errorMessage,propietario});
}

const update = (req,res) =>{
    const id = req.params.id;
    const {nombre,apellido} = req.body;
    const [error,operario] = operariosController.update(id,nombre,apellido);
    if(error){
        const uriError = encodeURIComponent(error);
        return res.redirect(`/operarios/${id}/edit?error=${uriError}`)
    }
    res.redirect(`/operarios/${id}`);
};

const remove = (req,res)=>{
    const id = req.params.id;
    const [error,operario] = operariosController.remove(id);
    res.redirect("/operarios");
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