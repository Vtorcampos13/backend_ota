import zonaController from "./zonaController.js";

const getAll = async (req,res) => {
    const errorMessage = req.query.error;
    const q = req.query.q;
    const [error, zona] = await zonaController.getAll(q);
    res.render("zona/list",{error,zona}); 
}

const getById = async (req,res) => {
    const id = req.params.id;
    const [error, zonas] = await zonaController.getById(id);
    res.json(zonas);
}

const createForm = (req,res)=>{
    const error = req.query.error;
    res.render("zona/new",{error});
}

const create = (req,res) =>{
    const {nombre_zona,tarifa_hora} = req.body;
    const [error,zonas] = zonaController.create(nombre_zona,tarifa_hora);
    if(error){
        const uriError = encodeURIComponent(error);
        return res.redirect(`/zona/new?error=${uriError}`)
    }
    res.redirect("/zona");
}

const updateForm = (req,res) =>{
    const errorMessage = req.query.error;
    const id = req.params.id;
    const [error,zonas] = zonaController.getById(id);
    if(error){
        res.redirect("/zona");
    }
    res.render("zona/edit",{error:errorMessage,zonas});
}

const update = (req,res) =>{
    const id = req.params.id;
    const {nombre_zona,tarifa_hora} = req.body;
    const [error,zonas] = zonaController.update(nombre_zona,tarifa_hora);
    if(error){
        const uriError = encodeURIComponent(error);
        return res.redirect(`/zona/${id_zona}/edit?error=${uriError}`)
    }
    res.redirect(`/zona/${id_zona}`);
};

const remove = (req,res)=>{
    const id = req.params.id;
    const [error,zonas] = zonaController.remove(id);
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



