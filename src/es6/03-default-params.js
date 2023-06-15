//como se hacia antes
function newUser(name, age, country){

    var name = name || "David";
    var age = age || 24;
    var country = country || "ESP";

    console.log(name,age,country);

}

newUser();
newUser("Oscar", 15, "CO");

//Nueva forma de ECMAScript 6 (mas amigable y mejor)

function newAdmin(name = 'David', age = 22, country = "ESP"){
    console.log(name, age, country);
}

newAdmin();
newAdmin("Ana",12,"EEUU");