import parkingController from "./parkingController.js";

 const getAll = async (req,res) =>{
    const errorMessage = req.query.error;
    const q = req.query.q;
    const [error, parking] = await parkingController.getAll(q);
    res.render("parking/list",{error,parking});
}

const getById = async (req,res) =>{
    const id = req.params.id;
    const [error,parkings] = await parkingController.getById(id);
    res.render("parking/show",{error,parkings,session:req.session});
}

const createForm = (req,res)=>{
    const error = req.query.error;
    res.render("parking/new",{error:error});
}

const create = async (req,res) =>{
    const {fecha_inicio,fecha_fin,activo,id_coche,id_zona} = req.body;
    const [error,parkings] = await parkingController.create(fecha_inicio,fecha_fin,activo,id_coche,id_zona);
    if(error){
        const uriError = encodeURIComponent(error);
        return res.redirect(`/parking/new?error=${uriError}`)
    }
    res.redirect("/parking");
}

/* const updateForm = async(req,res) =>{
    const errorMessage = req.query.error;
    const id = req.params.id;
    const [error,parkings] = await parkingController.getById(id);
    if(error){
        res.redirect("/parking");
    }
    res.render("parking/edit",{error:errorMessage,parkings});
}

const update = (req,res) =>{
    const id = req.params.id;
    const {fecha_inicio,fecha_fin,activo,id_coche,id_zona} = req.body;
    const [error,parkings] = parkingController.update(fecha_inicio,fecha_fin,activo,id_coche,id_zona);
    if(error){
        const uriError = encodeURIComponent(error);
        return res.redirect(`/parking/${id_parking}/edit?error=${uriError}`)
    }
    res.redirect(`/parking/${id_parking}`);
}; */

const remove = (req,res)=>{
    const id = req.params.id;
    const [error,parkings] = parkingController.remove(id);
    if(error){
        const uriError = encodeURIComponent(error);
        return res.redirect(`/parking?error=${uriError}`)
    }
    res.redirect("/parking");
}

const aparcarForm = (req, res)=>{
    const error = req.query.error;
    res.render("parking/aparcar",{error:error});
}

const felicidades = (req, res)=>{
    const error = req.query.error;
    res.render("parking/felicidades",{error:error});
}

const nofelicidades = (req, res)=>{
    const error = req.query.error;
    res.render("parking/nofelicidades",{error:error});
}

const aparcar =  async(req,res)=>{
    const id_zona = req.body.zona
    const tiempo = req.body.tiempo
    const id_coche = req.session.id_coche;
    const [error, aparcado] = await parkingController.aparcar(id_coche, id_zona, tiempo);
    res.redirect(`/parking/felicidades`)

    if(error){
        const uriError = encodeURIComponent(error);
        return res.redirect(`/parking?error=${uriError}`)
    }
}


const desaparcar = async (req,res)=>{
    const id_coche = req.session.id_coche;
    const [error,aparcado] = await parkingController.desaparcar(id_coche);
    res.redirect(`/parking/nofelicidades`)
    if(error){
        const uriError = encodeURIComponent(error);
        return res.redirect(`/parking?error=${uriError}`)
    }
}


export default{
    getAll,
    getById,
    create,
    createForm,
    //update,
    //updateForm,
    remove,
    aparcar,
    felicidades,
    nofelicidades,
    aparcarForm,
    desaparcar
};