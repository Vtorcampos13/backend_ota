import { DataTypes } from "sequelize";

import sequelize from "../config/sequelize.js";

const parkingModel = sequelize.define("parking",
{
    id_parking:{
        type: DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
        unique:true,
    },
    fecha_inicio : {
        type: DataTypes.DATETIME,
    },
    fecha_fin: {
        type: DataTypes.DATETIME,
    },
    id_coche: {
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    id_zona: {
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    activo: {
        type: DataTypes.BIT,
        defaultValue: 1,
    }
})

export default parkingModel;