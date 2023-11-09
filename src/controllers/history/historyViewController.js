import historyController from "./historyController.js";

const historyGetAll = async (req,res) =>{
    const id_coche = req.session.id_coche;
    const errorMessage = req.query.error;
    console.log("venga ya !");
    const [error, datos] = await historyController.historyGetAll(id_coche);
    res.render("history/history",{error,datos});
}


export default{
    historyGetAll
};