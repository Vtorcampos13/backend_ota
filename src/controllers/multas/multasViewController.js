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

/* const update = (req,res) =>{
    const id = req.params.id;
    const {importe_multa,fecha_multa,id_parking,activa} = req.body;
    const [error,multa] = multasController.update(importe_multa,fecha_multa,id_parking,activa);
    if(error){
        const uriError = encodeURIComponent(error);
        return res.redirect(`/multas/${id_multas}/edit?error=${uriError}`)
    }
    res.redirect(`/multas/${id_multas}`);
}; */

const remove = async (req,res)=>{
    
    const id = req.params.id;
    const [error,multa] = await multasController.remove(id);
    if(error){
        const uriError = encodeURIComponent(error);
        return res.redirect(`/multas?error=${uriError}`)
    }
    res.redirect("/multas");
}

const multado = (req,res)=>{
    res.render("multas/multado");
}


const pagarMulta = async (req,res)=>{
    const id_coche = req.session.id_coche;
    const [error, pagar] = await multasController.pagarMulta(id_coche);
    res.redirect(`/multas/gracias`)
}

const gracias = async (req,res)=>{
    res.render("multas/gracias");
}

export default{
    getAll,
    getById,
    create,
    createForm,
    //update,
    updateForm,
    remove,
    multado,
    pagarMulta,
    gracias
};