import parkingModel from "../../models/parkingModel.js";
import {Op} from "sequelize";


const getAll = async(q=null) => {
    const options = {};

    if(q) {
        options.where = { parking:{ [Op.like]: `%${q}%` },}
    }
    try{
        const parking = await parkingModel.findAll(options);
        return [null, parking];
    }catch(e){
        return [e.message,null];
    }
}

const getById = async (id) => {
    try {
        const coche = await parkingModel.findByPk(id);
        return [null, parking];
    }
    catch (e) {
        return [e.message, null];
    }
}
const create = async(id_parking,fecha_inicio, fecha_fin, id_coche, id_zona, activo) => {
    if (id_parking === undefined || fecha_inicio === undefined || fecha_fin === undefined || id_coche === undefined || id_zona === undefined || activo === undefined) {
        const error = "parking, fecha_inicio, fecha_fin,coche, zona y activo deben ser definidos";
        return [error, null];
    }
    try{
        const parking = await parking.create({id_parking,fecha_inicio, fecha_fin, id_coche, id_zona, activo});
        return [null,parking];
    }
    catch(e){
        return [e.message, null];
    }
}

const update = async(id_parking,fecha_inicio, fecha_fin, id_coche, id_zona, activo) => {
    
    if(id_parking == undefined){
        const error = "Tienes que especificar un ID válido";
        return [error,null];
    }
    if (fecha_inicio === undefined || fecha_fin === undefined || id_coche === undefined || id_zona === undefined || activo === undefined) {
        const error = "fecha_inicio, fecha_fin,coche, zona y activo deben ser definidos";
        return [error, null];
    }
    try {
        console.log("id",id);
        const coche= await parkingModel.findByPk(id);
        parking.fecha_inicio = fecha_inicio;
        parking.fecha_fin = fecha_fin;
        parking.id_coche = id_coche;
        parking.id_zona = id_zona;
        return [null,coche];
    }
    catch (e) {
        console.log(e)
        return [e.message,null];
    }
};

const remove = async (id) => {
    try {
        const coche = await parkingModel.findByPk(id);
        if(!parking){
            const error = "No se ha encontrado ningún elemento con ese ID";
            return[error,null];
        }
        return [null,parking];
    }
    catch (e) {
        return [e.message,null];
    }
}

export {
    getAll,
    getById,
    create,
    update,
    remove
};



export default {
    getAll,
    getById,
    create,
    update,
    remove
};