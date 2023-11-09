import { DataTypes } from "sequelize";

import sequelize from "../config/sequelize.js";
import cochesModel from "./cochesModel.js";
import multasModel from "./multasModel.js";
import zonaModel from "./zonaModel.js";

const parkingModel = sequelize.define("parking",
{
    id_parking:{
        type: DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
        unique:true,
    },
    fecha_inicio:{
        type: DataTypes.DATE,
    },
    fecha_fin:{
        type: DataTypes.DATE,
    },
    activo: {
        type: DataTypes.BOOLEAN,
        defaultValue:1,
    },
    id_zona: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'zona', 
          key: 'id_zona',
        }
    },
    id_coche: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'coches', 
          key: 'id_coche',
        }
    },
})

parkingModel.belongsTo(cochesModel, {
    foreignKey: "id_coche",
    as: 'coches'
});

parkingModel.belongsTo(zonaModel, {
    foreignKey: "id_parking",
    as: 'zona'
});

multasModel.belongsTo(parkingModel, {
    foreignKey: "id_parking",
    as: 'multas'
});


cochesModel.hasMany(parkingModel, { foreignKey: "id_coche"})

zonaModel.hasMany(parkingModel, { foreignKey: "id_zona" })

parkingModel.hasOne(multasModel, { foreignKey: "id_parking", as: 'multas'})



export default parkingModel;

