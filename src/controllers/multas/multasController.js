import multasModel from "../../models/multasModel.js";
import parkingModel from "../../models/parkingModel.js";
import {Op} from "sequelize";


const getAll = async(q=null) => {
    const options = {};

    if(q) {
        options.where = { id_multas:{ [Op.like]: `%${q}%` },}
    }
    try{
        const multas = await multasModel.findAll(options);
        return [null, multas];
    }catch(e){
        return [e.message,null];
    }
}

const getById = async (id) => {
    try {
        const multa = await multasModel.findByPk(id);
        return [null, multa];
    }
    catch (e) {
        return [e.message, null];
    }
}
const create = async (importe_multa,fecha_multa,id_parking,activa) => {
    if (importe_multa === undefined || fecha_multa === undefined || id_parking === undefined || activa === undefined) {
        const error = "importe_multa,fecha_multa,id_parking,activa deben ser definidos";
        return [error, null];
    }
    try{
        const multa = await multasModel.create({importe_multa,fecha_multa,id_parking,activa});
        return [null,multa];
    }
    catch(e){
        return [e.message, null];
    }
}

const update = async(id,importe_multa,fecha_multa,id_parking,activa) => {
    
    if(id === undefined){
        const error = "Tienes que especificar un ID válido";
        return [error,null];
    }
    if (importe_multa === undefined || fecha_multa === undefined || id_parking === undefined || activa === undefined) {
        const error = "importe_multa,fecha_multa,id_parking,activa deben ser definidos";
        return [error, null];
    }
    try {
        const multa = await multasModel.findByPk(id);
        multa.importe_multa = importe_multa;
        multa.fecha_multa = fecha_multa;
        multa.id_parking = id_parking;
        multa.activa = activa;
        return [null,multa];
    }
    catch (e) {
        console.log(e)
        return [e.message,null];
    }
};

const remove = async (id) => {
    try {
        const multa = await multasModel.findByPk(id);
        multa.destroy()
        if(!multa){
            const error = "No se ha encontrado ningún elemento con ese ID";
            return[error,null];
        }
        return [null,multa];
    }
    catch (e) {
        return [e.message,null];
    }
}

const pagarMulta = async (id_coche) => {
    const multado = await parkingModel.findOne({
        include: [
            {
                model: multasModel,
                as: "multas",
                attributes: ['id_multa','importe_multa','fecha_multa','activa']
        }
    ],
        where:{
            id_coche:id_coche,
            activo: 1
        }
    })
    if (multado) {
        const cocheMultado = await multasModel.findOne({
            where: {
                id_multa: multado.multas.id_multa
            }
        })
        const activa = false;
        await cocheMultado.update({activa})
        return [null,cocheMultado]
    } else {
        console.log("no hay multa")
    }
}

export {
    getAll,
    getById,
    create,
    update,
    remove,
    pagarMulta
};



export default {
    getAll,
    getById,
    create,
    update,
    remove,
    pagarMulta
};