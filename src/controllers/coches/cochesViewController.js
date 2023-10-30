import cochesController from "./cochesController.js";

 const getAll = async (req,res) =>{
    const [error, coches] = await cochesController.getAll();
    res.render("coches/list",{error,coches});
}

const getById = async (req,res) =>{
    const id = req.params.id;
    const [error,aceituna] = await aceitunasController.getById(id);
    //res.render("aceitunas/show",{error,aceituna});   
    res.json(aceituna);
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
    const {tipo, peso} = req.body;
    const [error,aceituna] = aceitunasController.update(id,tipo,peso);
    if(error){
        const uriError = encodeURIComponent(error);
        return res.redirect(`/aceitunas/${id}/edit?error=${uriError}`)
    }
    res.redirect(`/aceitunas/${id}`);
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