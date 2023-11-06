import multasController from "./multasController.js";

 const getAll = async (req,res) =>{
    const errorMessage = req.query.error;
    const q = req.query.q;
    const [error, multas] = await multasController.getAll(q);
    res.render("multas/list",{error,multas});
}

const getById = async (req,res) =>{
    const id = req.params.id;
    const [error,multa] = await multasController.getById(id);
    res.render("multas/show",{error,multa,session:req.session});
}

const createForm = (req,res)=>{
    const error = req.query.error;
    res.render("multas/new",{error});
}

const create = (req,res) =>{
    const {importe_multa,fecha_multa,id_parking,activa} = req.body;
    const [error,multa] = multasController.create(importe_multa,fecha_multa,id_parking,activa);
    if(error){
        const uriError = encodeURIComponent(error);
        return res.redirect(`/multas/new?error=${uriError}`)
    }
    res.redirect("/multas");
}

const updateForm = async(req,res) =>{
    const errorMessage = req.query.error;
    const id = req.params.id;
    const [error,multa] = await multasController.getById(id);
    if(error){
        res.redirect("/multas");
    }
    res.render("multas/edit",{error:errorMessage,multa});
}

const update = (req,res) =>{
    const id = req.params.id;
    console.log("params id",id)
    const {importe_multa,fecha_multa,id_parking,activa} = req.body;
    const [error,multa] = cochesController.update(importe_multa,fecha_multa,id_parking,activa);
    if(error){
        const uriError = encodeURIComponent(error);
        return res.redirect(`/multas/${id_multa}/edit?error=${uriError}`)
    }
    res.redirect(`/multas/${id_multa}`);
};

const remove = (req,res)=>{
    const id = req.params.id;
    const [error,multa] = multasController.remove(id);
    if(error){
        const uriError = encodeURIComponent(error);
        return res.redirect(`/multas?error=${uriError}`)
    }
    res.redirect("/multas");
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