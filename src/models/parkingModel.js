import { DataTypes } from "sequelize";

import sequelize from "../config/sequelize.js";

const parkingModel = sequelize.define("zona",
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

export default parkingModel;

