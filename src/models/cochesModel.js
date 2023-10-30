import connection from "../config/mysql.js";


const findAll= async ()=>{
    const queryString = "SELECT * FROM coches;";
    const [rows,fields] = await connection.query(queryString);
    console.log(rows);
    console.log(fields);
    return rows;
}

const findByPk = async (pk) =>{
    const queryString = "SELECT * FROM coches WHERE id_coche=?;";
    const [rows,fields] = await connection.query(queryString,[pk]);
    console.log(rows);
    console.log(fields);
    return rows[0];
}

const update = async(data,pk) =>{
    let queryString = "UPDATE coches SET marca=?, modelo=?, matricula=?, password=? WHERE id_coche=?;";
    const [rows,fields] = await connection.query(queryString,[data.marca,data.modelo,data.matricula,data.password,pk]);
    console.log("rows",rows);
    console.log("fields",fields);
    return rows;
}

export default {
    findAll,
    findByPk,
    update
}