// enahced objects literals

//funcion devuelve objeto
function newUser(user, age, country, uId){

    //queremos que nos devuelva un objeto, se puede asignar, si queremos, los parametros user:user, age:age,...
    return{
        user,
        age,
        country,
        //id:uId o tambien:
        id
    }
}
console.log(newUser("gndx",12,"CO",2));