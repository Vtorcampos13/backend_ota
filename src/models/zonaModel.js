import { DataTypes } from "sequelize";

import sequelize from "../config/sequelize.js";

const zonaModel = sequelize.define("zona",
{
    id_zona:{
        type: DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
        unique:true,
    },
    nombre_zona : {
        type: DataTypes.STRING,
    },
    tarifa_hora: {
        type: DataTypes.INTEGER,
    }
})

export default zonaModel;