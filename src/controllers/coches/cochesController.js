import cochesModel from "../../models/cochesModel.js";

const getAll = async() => {
    try{
        const coches = await cochesModelsModel.findAll();
        return [null, coches];
    }catch(e){
        return [e.message,null];
    }
}

const getById = async (id) => {
    try {
        const coche = await cochesModel.findByPk(id);
        return [null, coche];
    }
    catch (e) {
        return [e.message, null];
    }
}
const create = (marca, modelo, matricula, password) => {
    if (marca === undefined || modelo === undefined || matricula === undefined || password === undefined) {
        const error = "marca, modelo, matricula y password deben ser definidos";
        return [error, null];
    }
    const coche = {
        id: maxId++,
        marca:marca,
        modelo:modelo,
        matricula:matricula,
        passwrod:password
    };
    coches.push(coche);
    return [null, coche];
}

const update = async(id_coche,marca, modelo, matricula, password) => {
    
    if(id == undefined){
        const error = "Tienes que especificar un ID válido";
        return [error,null];
    }
    if (marca === undefined || modelo === undefined || matricula === undefined || password === undefined) {
        const error = "marca, modelo, matricula y password deben ser definidos";
        return [error, null];
    }
    try {
        console.log("id",id);
        await cochesModel.update({marca,modelo,matricula,password},id);
        const coche= await cochesModel.findByPk(id);
        return [null,coche];
    }
    catch (e) {
        console.log(e)
        return [e.message,null];
    }
};

const remove = (id) => {
    try {
        const coche = coches.find(element => element.id == id);
        coches = coches.filter(element => element.id != id);
        if(!aceituna){
            const error = "No se ha encontrado ningún elemento con ese ID";
            return[error,null];
        }
        return [null,aceituna];
    }
    catch (e) {
        return [e.message,null];
    }
}

export {
    getAll,
    getById,
    create,
    update,
    remove
};



export default {
    getAll,
    getById,
    create,
    update,
    remove
};