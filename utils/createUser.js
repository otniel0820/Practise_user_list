// La función "createUser" recibirá la información del nuevo usuario,
// creará un objeto siguiendo el modelo de los usuarios del
// archivo "users.js", lo añadirá AL PRINCIPIO de la lista de usuarios
// y devolverá la nueva lista

function createUser(name, lastname, age, country, holdUsers) {
    let idUser = holdUsers.length +1
    let newUser = {
        id: idUser,
        first_name: name,
        last_name: lastname,
        age : age,
        country : country,
    };
    holdUsers.unshift(newUser); 
    return holdUsers
}

export default createUser;