// La función "deleteUser" debe buscar el usuario dentro de la lista,
// eliminarlo, y devolver la nueva lista sin el usuario en cuestión

function deleteUser(deleteName, holdUsers) {
    let resultado = holdUsers.filter(user => user.first_name != deleteName);
    return resultado
}

export default deleteUser;