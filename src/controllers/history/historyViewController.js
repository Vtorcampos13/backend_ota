import historyController from "./historyController.js";

const historyGetAll = async (req,res) =>{
    const errorMessage = req.query.error;
    const q = req.query.q;
    const [error, datos] = await historyController.getAll();
    res.render("history/history",{error,datos});
}


export default{
    historyGetAll
};