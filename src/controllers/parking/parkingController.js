import parkingModel from "../../models/parkingModel.js";
import {Op} from "sequelize";

const getAll = async(q=null) => {
    const options = {};

    try{
        const parking = await parkingModel.findAll(options);
        return [null, parking];
    }catch(e){
        return [e.message,null];
    }
}

const getById = async (id) => {
    try {
        const parkings = await parkingModel.findByPk(id);
        return [null, parkings];
    }
    catch (e) {
        return [e.message, null];
    }
}
const create = async (fecha_inicio,fecha_fin,id_coche,id_zona,activo) => {
    if (fecha_inicio === undefined || fecha_fin === undefined || id_coche === undefined || id_zona === undefined || activo === undefined) {
        const error = "fecha_inicio, fecha_fin, id_zona, id_coche y activo deben ser definidos";
        return [error, null];
    }
    try{
        const parkings = await parkingModel.create({fecha_inicio,fecha_fin,id_coche,id_zona,activo});
        return [null,parkings];
    }
    catch(e){
        return [e.message, null];
    }
}

const update = async(id_parking,fecha_inicio,fecha_fin,id_coche,id_zona,activo) => {
    
    if(id_parking == undefined){
        const error = "Tienes que especificar un ID válido";
        return [error,null];
    }
    if (fecha_inicio === undefined || fecha_fin === undefined || id_coche === undefined || id_zona === undefined || activo === undefined) {
        const error = "fecha_inicio, fecha_fin, id_zona, id_coche y activo deben ser definidos";
        return [error, null];
    }
    try {
        console.log("id",id);
        const parkings = await parkingModel.findByPk(id);
        parkings.fecha_inicio = fecha_inicio;
        parkings.fecha_fin = fecha_fin;
        parkings.id_coche = id_coche;
        parkings.id_zona = id_zona;
        parkings.activo = activo;
        return [null,parkings];
    }
    catch (e) {
        console.log(e)
        return [e.message,null];
    }
};

const remove = async (id) => {
    try {
        const parkings = await parkingModel.findByPk(id);
        if(!parkings){
            const error = "No se ha encontrado ningún elemento con ese ID";
            return[error,null];
        }
        return [null,parkings];
    }
    catch (e) {
        return [e.message,null];
    }
}


function fecha() {
    let date = new Date();
    date.setMinutes(0);
    date.setSeconds(0);
    return date.toISOString().slice(0, 19).replace('T', ' ');
}



const aparcar = async(id_coche,id_zona) => {
    const fecha_inicio = fecha();
    const fecha_fin = "2026-11-11 15:00:00"
    try {
        const aparcado = await parkingModel.create({fecha_inicio,fecha_fin,id_zona,id_coche})
        return [null,aparcado]
    }
    catch(e){
        console.log(e)
        return [e.message, null]
    }
}

const desaparcar = async (id) => {
    const fecha_fin = fecha()
    const activo = 0
    
    try {
        // Sacar el id con un select id from where matricula y activo = true
        await parkingModel.update({fecha_fin,activo}, {
            where: {
                id_parking: id
                
            }
        })
        const parkings = await parkingModel.findByPk(id);
        return [null,parkings]
    }
    catch(e){
        console.log(e)
    }
}



export {
    getAll,
    getById,
    create,
    update,
    remove,
    aparcar,
    desaparcar
};



export default {
    getAll,
    getById,
    create,
    update,
    remove,
    aparcar,
    desaparcar
};
