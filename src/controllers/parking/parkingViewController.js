import parkingController from "./parkingController.js";

const showParkingForm = (req, res) => {
  res.render("parkingForm"); // Renderiza la vista del formulario de aparcamiento
};

const aparcar = async (req, res) => {
  const { cocheId, zonaId, fechaInicio } = req.body;

  // Llama a la función del controlador para realizar el aparcamiento
  const [error, resultado] = await parkingController.aparcar(cocheId, zonaId, fechaInicio);

  if (error) {
    // Maneja el error mostrando un mensaje de error
    res.render("error", { mensaje: "Error al aparcar el coche: " + error });
  } else {
    // Muestra un mensaje de éxito
    res.render("aparcarResult", { resultado: "Aparcamiento exitoso" });
  }
};

const desaparcar = async (req, res) => {
  const { estacionamientoId, fechaFin } = req.body;

  // Llama a la función del controlador para realizar el desaparcamiento
  const [error, resultado] = await parkingController.desaparcar(estacionamientoId, fechaFin);

  if (error) {
    // Maneja el error mostrando un mensaje de error
    res.render("error", { mensaje: "Error al desaparcar el coche: " + error });
  } else {
    // Muestra un mensaje de éxito
    res.render("desaparcarResult", { resultado: "Desaparcamiento exitoso" });
  }
};

export default {
  showParkingForm,
  aparcar,
  desaparcar,
};