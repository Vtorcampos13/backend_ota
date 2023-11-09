import parkingModel from "../../models/parkingModel.js";
import cochesModel from "../../models/cochesModel.js";
import zonaModel from "../../models/zonaModel.js"
import {Op} from "sequelize";


const historyGetAll = async(id_coche) => {
    try{
        const datos = await parkingModel.findAll({
            where:{"id_coche":id_coche},
            attributes: ['fecha_inicio', 'fecha_fin'],
            include:[
                {
                    model: cochesModel,
                    as: "coches",
                    attributes: ['id_coche','matricula','marca','modelo'],
                },
                {
                    model: zonaModel,
                    as: "zona",
                    attributes: ['id_zona','nombre_zona'],
                },
            ]
        });
        console.log("datos:", datos);
        return [null, datos];
    }catch(e){
        return [e.message,null];
    }
}


export {
    historyGetAll
};

export default {
    historyGetAll
};
