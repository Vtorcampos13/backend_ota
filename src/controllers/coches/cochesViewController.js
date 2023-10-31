import cochesController from "./cochesController.js";

 const getAll = async (req,res) =>{
    const [error, coches] = await cochesController.getAll();
    res.render("coches/list",{error,coches});
}

const getById = async (req,res) =>{
    const id = req.params.id;
    const [error,coche] = await cochesController.getById(id);
    //res.render("coches/show",{error,coche});   
    res.json(coche);
}

const createForm = (req,res)=>{
    const error = req.query.error;
    res.render("coches/new",{error});
}

const create = (req,res) =>{
    const {marca,modelo,matricula,password} = req.body;
    const [error,coche] = cochesController.create(marca,modelo,matricula,password);
    if(error){
        const uriError = encodeURIComponent(error);
        return res.redirect(`/coches/new?error=${uriError}`)
    }
    res.redirect("/coches");
}

const updateForm = async(req,res) =>{
    const errorMessage = req.query.error;
    const id = req.params.id;
    const [error,coche] = await cochesController.getById(id);
    if(error){
        res.redirect("/coches");
    }
    res.render("coches/edit",{error:errorMessage,coche});
}

const update = (req,res) =>{
    const id = req.params.id;
    console.log("params id",id)
    const {marca, modelo, matricula, password} = req.body;
    const [error,coche] = cochesController.update(marca, modelo, matricula, password);
    if(error){
        const uriError = encodeURIComponent(error);
        return res.redirect(`/coches/${id_coche}/edit?error=${uriError}`)
    }
    res.redirect(`/coches/${id_coche}`);
};

const remove = (req,res)=>{
    const id = req.params.id;
    const [error,coche] = cochesController.remove(id);
    res.redirect("/coches");
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