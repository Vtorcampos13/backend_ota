const listaOperarios = [
    {
        nombre: "Miguel",
        apellido: "Gomez"

    },
    {
      nombre: "Mikel",
      apellido: "Urrutia",

    },
    {
      nombre: "Angel",
      apellido: "Martinez",
    },
    {
      nombre: "Eduardo",
      apellido: "Gonzalez",
    
    },
    {
      nombre: "Unai",
      apellido: "Agirre",
      
    }
];

let operarios = [];
let maxId = 1;

for (let i = 0; i < 5; i++) {
    const newOperario = {
        id: i + 1,
        nombre: listaOperarios[i].nombre,
        apellido: listaOperarios[i].apellido,
        email: listaOperarios[i].email
    }
    operarios.push(newOperario);
    maxId++;
}

const getAll = () => {
    return [null, operarios];
}

const getById = (id) => {
    try{
        const propietario = operarios.find(element => element.id == id);
    }
    catch(e) {
        return [e.message, null];
    }
    
}

const create = (nombre,apellido) => {
    if( nombre === undefined || apellido === undefined){
        const error = "nombre, apellido deben de ser definidos";
        return[error,null];
    }
    const operario = {
        id: maxId++,
        nombre:nombre,
        apellido:apellido,
    };
    operarios.push(operario);
    return [null,operario];
}

const update = (id,nombre,apellido) => {
    if(id === undefined){
        const error = "tienes que especificar un ID válido";
        return [error,null];
    }
    if(nombre === undefined || apellido === undefined){
        const error = "nombre, apellido deben de ser definidos";
        return [error,null];
    }
    try{
        const operario = operarios.find(element => element.id == id);
        operario.nombre = nombre;
        operario.apellido = apellido;
        return [null, operario];
    } catch (e){
        return [e.message, null];
    }
};

const remove = (id) => {
    try{
        const operario = operarios.find(element => element.id == id);
        operarios = operarios.filter(element => element.id != id);
        if(!operario){
            const error = "no se ha encontrado ningún operario con ese ID";
            return[error,null];
        }
        return[null,operario];
    } catch (e){
        return [e.message, null];
    }
}

export default {
    getAll,
    getById,
    create,
    update,
    remove
};