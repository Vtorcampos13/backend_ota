import parkingModel from "../../models/parkingModel.js";
import cochesModel from "../../models/cochesModel.js";
import zonaModel from "../../models/zonaModel.js"
import {Op} from "sequelize";


const historyGetAll = async() => {
    try{
        const datos = await historyModel.findAll({
            include:[
                {
                    model: cochesModel,
                    as: "coches",
                    attributes: ['id_coche','matricula','marca','modelo'],
                    right:true,
                },
                {
                    model: zonaModel,
                    as: "zona",
                    attributes: ['id_zona','nombre_zona'],
                },
                {
                    model: parkingModel,
                    as: "parking",
                    attributes: ['fecha_inicio', 'fecha_fin'],
                },
            ]
        });
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
