import { DataTypes } from "sequelize";

import sequelize from "../config/sequelize.js";

const cochesModel = sequelize.define("coches",
{
    id_coche:{
        type: DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
        unique:true,
    },
    marca : {
        type: DataTypes.STRING,
    },
    modelo: {
        type: DataTypes.STRING,
    },
    matricula: {
        type: DataTypes.STRING,
        unique:true,
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull:false,
    }
})



export default cochesModel;