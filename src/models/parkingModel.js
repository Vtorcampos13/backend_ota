import { DataTypes } from "sequelize";

import sequelize from "../config/sequelize.js";
import cochesModel from "./cochesModel.js";
import multasModel from "./multasModel.js";
import zonaModel from "./zonaModel.js";

const parkingModel = sequelize.define('Parking', {
    fecha_inicio: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    fecha_fin: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    id_coche: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_zona: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    activo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });

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

