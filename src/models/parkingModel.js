import { DataTypes } from "sequelize";

import sequelize from "../config/sequelize.js";

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

export default parkingModel;

