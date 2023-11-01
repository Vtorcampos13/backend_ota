import zonaController from "./zonaController.js";

const getAll = (req,res) => {
    const [error, zona] = zonaController.getAll();
    res.render("zona/list",{error,zona}); 
}

const getById = (req,res) => {
    const id = req.params.id;
    const [error, zona] = zonaController.getById();
    res.render("zona/list",{error,zona}); 
}

const createForm = (req,res)=>{
    const error = req.query.error;
    res.render("zona/new",{error});
}

const create = (req,res) =>{
    const {nombre_zona,tarifa_hora} = req.body;
    const [error,zona] = zonaController.create(nombre_zona,tarifa_hora);
    if(error){
        const uriError = encodeURIComponent(error);
        return res.redirect(`/zona/new?error=${uriError}`)
    }
    res.redirect("/zona");
}

const updateForm = (req,res) =>{
    const errorMessage = req.query.error;
    const id = req.params.id;
    const [error,zona] = zonaController.getById(id);
    if(error){
        res.redirect("/zona");
    }
    res.render("zona/edit",{error:errorMessage,zona});
}

const update = (req,res) =>{
    const id = req.params.id;
    const {nombre_zona,tarifa_hora} = req.body;
    const [error,zona] = zonaController.update(id,nombre_zona,tarifa_hora);
    if(error){
        const uriError = encodeURIComponent(error);
        return res.redirect(`/zona/${id}/edit?error=${uriError}`)
    }
    res.redirect(`/zona/${id}`);
};

const remove = (req,res)=>{
    const id = req.params.id;
    const [error,zona] = zonaController.remove(id);
    res.redirect("/zona");
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



