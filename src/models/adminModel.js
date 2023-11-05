import { DataTypes } from "sequelize";

import sequelize from "../config/sequelize.js";

const adminModel = sequelize.define("admin",
{
    user:{
        type: DataTypes.STRING,
        allowNull:false,
        primaryKey:true
    },
    password: {
        type: DataTypes.STRING,
        allowNull:false
    }
})

export default adminModel;