const listaPropietarios = [
    {
        nombre: "Jose",
        apellido: "Garcia",
        email: "jose.garcia@email.com"

    },
    {
      nombre: "Ana",
      apellido: "Rodriguez",
      email: "ana.rodriguez@email.com"
    },
    {
      nombre: "Carlos",
      apellido: "López",
      email: "carlos.lopez@email.com"
    },
    {
      nombre: "María",
      apellido: "Martínez",
      email: "maria.martinez@email.com"
    },
    {
      nombre: "Pedro",
      apellido: "Fernández",
      email: "pedro.fernandez@email.com"
    }
];

let propietarios = [];
let maxId = 1;

for (let i = 0; i < 5; i++) {
    const newPropietario = {
        id: i + 1,
        nombre: listaPropietarios[i].nombre,
        apellido: listaPropietarios[i].apellido,
        email: listaPropietarios[i].email
    }
    propietarios.push(newPropietario);
    maxId++;
}

const getAll = () => {
    return [null, propietarios];
}

const getById = (id) => {
    try{
        const propietario = propietarios.find(element => element.id == id);
    }
    catch(e) {
        return [e.message, null];
    }
    
}

const create = (nombre,apellido,email) => {
    if( nombre === undefined || apellido === undefined || email === undefined ){
        const error = "nombre, apellido o email deben de ser definidos";
        return[error,null];
    }
    const propietario = {
        id: maxId++,
        nombre:nombre,
        apellido:apellido,
        email:email
    };
    propietarios.push(propietario);
    return [null,propietario];
}

const update = (id,nombre,apellido,email) => {
    if(id === undefined){
        const error = "tienes que especificar un ID válido";
        return [error,null];
    }
    if(nombre === undefined || apellido === undefined || email === undefined){
        const error = "nombre, apellido e email deben de ser definidos";
        return [error,null];
    }
    try{
        const propietario = propietarios.find(element => element.id == id);
        propietario.nombre = nombre;
        propietario.apellido = apellido;
        propietario.email = email;
        return [null, propietario];
    } catch (e){
        return [e.message, null];
    }
};

const remove = (id) => {
    try{
        const propietario = propietarios.find(element => element.id == id);
        propietarios = propietarios.filter(element => element.id != id);
        if(!propietario){
            const error = "no se ha encontrado ningún propietario con ese ID";
            return[error,null];
        }
        return[null,propietario];
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



