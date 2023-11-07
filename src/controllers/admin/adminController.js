import cochesModel from "../../models/cochesModel.js";
import multasModel from "../../models/multasModel.js"
import parkingModel from "../../models/parkingModel.js"
import zonaModel from "../../models/zonaModel.js"
import {Op} from "sequelize";


const getAll = async(q=null) => {
    const options = {};

    if(q) {
        options.where = { marca:{ [Op.like]: `%${q}%` },}
    }
    try{
        const coches = await cochesModel.findAll(options);
        return [null, coches];
    }catch(e){
        return [e.message,null];
    }
}

const adminGetAll = async() => {
    try{
        const parking = await parkingModel.findAll({
            include:[
                {
                    model: multasModel,
                    as: "multas",
                    attributes: ['importe_multa','fecha_multa']
                }
            ],
            include:[
                {
                    model: cochesModel,
                    as: "coches",
                    attributes: ['id_coche','matricula','marca','modelo'],
                }
            ],
            include:[
                {
                    model: zonaModel,
                    as: "zona",
                    attributes: ['id_zona','nombre_zona'],
                }
            ]
        });
        return [null, parking];
    }catch(e){
        return [e.message,null];
    }
}


const getById = async (id) => {
    try {
        const coche = await cochesModel.findByPk(id);
        return [null, coche];
    }
    catch (e) {
        return [e.message, null];
    }
}
const create = async (marca, modelo, matricula, password) => {
    if (marca === undefined || modelo === undefined || matricula === undefined || password === undefined) {
        const error = "marca, modelo, matricula y password deben ser definidos";
        return [error, null];
    }
    try{
        const coche = await cochesModel.create({marca,modelo,matricula,password});
        return [null,coche];
    }
    catch(e){
        return [e.message, null];
    }
}

const update = async(id_coche,marca, modelo, matricula, password) => {
    
    if(id == undefined){
        const error = "Tienes que especificar un ID válido";
        return [error,null];
    }
    if (marca === undefined || modelo === undefined || matricula === undefined || password === undefined) {
        const error = "marca, modelo, matricula y password deben ser definidos";
        return [error, null];
    }
    try {
        console.log("id",id);
        const coche= await cochesModel.findByPk(id);
        coche.marca = marca;
        coche.modelo = modelo;
        coche.matricula = matricula;
        coche.password = password;
        return [null,coche];
    }
    catch (e) {
        console.log(e)
        return [e.message,null];
    }
};

const remove = async (id) => {
    try {
        const coche = await cochesModel.findByPk(id);
        if(!coche){
            const error = "No se ha encontrado ningún elemento con ese ID";
            return[error,null];
        }
        return [null,coche];
    }
    catch (e) {
        return [e.message,null];
    }
}

export {
    adminGetAll,
    getAll,
    getById,
    create,
    update,
    remove
};



export default {
    adminGetAll,
    getAll,
    getById,
    create,
    update,
    remove
};