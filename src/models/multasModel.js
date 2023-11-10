import { DataTypes } from "sequelize";

import sequelize from "../config/sequelize.js";

const multasModel = sequelize.define("multas",
{
    id_multa:{
        type: DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
        unique:true,
    },
    importe_multa:{
        type: DataTypes.STRING,
    },
    fecha_multa:{
        type: DataTypes.DATE,
    },
    id_parking: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'parking', 
          key: 'id_parking',
        }
    },
    activa: {
        type: DataTypes.BOOLEAN,
        defaultValue:1,
    }
})

export default multasModel;