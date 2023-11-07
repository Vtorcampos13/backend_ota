import parkingModel from "../../models/parkingModel.js";
import zonaModel from "../../models/zonaModel.js";
import cochesModel from "../../models/cochesModel.js";

// Función para aparcar un coche
const aparcar = async (cocheId, zonaId, fechaInicio) => {
  try {
    // Recupera la información del coche y la zona
    const coche = await cochesModel.findByPk(cocheId);
    const zona = await zonaModel.findByPk(zonaId);

    if (!coche || !zona) {
      return [null, "Coche o zona no encontrados"];
    }

    // Calcula el precio del estacionamiento en función de la tarifa de la zona y la hora de inicio
    const horaInicio = new Date(fechaInicio);
    const tarifa = zona.tarifa_hora;
    const precio = tarifa * (horaInicio.getHours() - zona.horaInicio.getHours());

    // Crea un nuevo registro de estacionamiento
    const nuevoEstacionamiento = await parkingModel.create({
      fecha_inicio: fechaInicio,
      id_coche: cocheId,
      id_zona: zonaId,
      precio: precio,
      activo: true,
    });

    return [nuevoEstacionamiento, null];
  } catch (error) {
    return [null, error.message];
  }
};

// Función para desaparcar un coche
const desaparcar = async (estacionamientoId, fechaFin) => {
  try {
    // Busca el registro de estacionamiento por su ID
    const estacionamiento = await parkingModel.findByPk(estacionamientoId);

    if (!estacionamiento) {
      return [null, "Registro de parking no encontrado"];
    }

    // Calcula el precio final en función de la hora de inicio y finalización
    const horaInicio = new Date(estacionamiento.fecha_inicio);
    const horaFin = new Date(fechaFin);
    const tarifa = estacionamiento.zona.tarifa_hora;
    const precio = tarifa * (horaFin.getHours() - horaInicio.getHours());

    // Actualiza el registro de estacionamiento con la hora de finalización y el precio
    estacionamiento.fecha_fin = fechaFin;
    estacionamiento.precio = precio;
    estacionamiento.activo = false;
    await estacionamiento.save();

    return [estacionamiento, null];
  } catch (error) {
    return [null, error.message];
  }
};

export default {
    aparcar,
    desaparcar,
};