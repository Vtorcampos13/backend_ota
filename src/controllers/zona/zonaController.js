
import zonaModel from "../../models/zonaModel.js";

import {Op} from "sequelize";


const getAll = async(q=null) => {
    const options = {};

    if(q) {
        options.where = { nombre_zona:{ [Op.like]: `%${q}%` },}
    }
    try{
        const zonas = await zonaModel.findAll(options);
        return [null, zonas];
    }catch(e){
        return [e.message,null];
    }
}

const getById = async (id) => {
    try {
        const zona = await zonaModel.findByPk(id);
        return [null, zona];
    }
    catch (e) {
        return [e.message, null];
    }
}
const create = async (nombre_zona,tarifa_hora) => {
    if (nombre_zona === undefined || tarifa_hora === undefined) {
        const error = "nombre de zona y tarifa hora deben ser definidos";
        return [error, null];
    }
    try{
        const zona = await zonaModel.create({nombre_zona,tarifa_hora});
        return [null,zona];
    }
    catch(e){
        return [e.message, null];
    }
}

const update = async(id_zona,nombre_zona,tarifa_hora) => {
    
    if(id == undefined){
        const error = "Tienes que especificar un ID válido";
        return [error,null];
    }
    if (nombre_zona === undefined || tarifa_hora === undefined) {
        const error = "nombre de zona y tarifa deben ser definidos";
        return [error, null];
    }
    try {
        console.log("id",id);
        const zonas = await zonaModel.findByPk(id);
        zonas.nombre_zona = nombre_zona;
        zonas.tarifa_hora = tarifa_hora;
        return [null,zonas];
    }
    catch (e) {
        console.log(e)
        return [e.message,null];
    }
};

const remove = async (id) => {
    try {
        const zonas = await zonaModel.findByPk(id);
        if(!coches){
            const error = "No se ha encontrado ningún elemento con ese ID";
            return[error,null];
        }
        return [null,zonas];
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

