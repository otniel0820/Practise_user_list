// La función "filterUserByAge" extraerá de la lista los usuarios 
// que cumplan con las condiciones de edad, y devolverá una nueva lista
// con los usuarios filtrados
// Los parámetros de edad son:
//     - "all": devolver todos los usuarios
//     - "young": usuarios de menos de 29 años (incluido 29)
//     - "adult": usuarios de entre 30 y 64 años (ambos incluidos)
//     - "young": usuarios de más de 65 años (incluido 65)

function filterUsersByAge(filterAge, holdUsers) {
    switch (filterAge) {
        case 'all':
            return holdUsers
            
        case 'young':
           return  holdUsers.filter(user => user.age <= 29);
            
        case 'adult':
            return holdUsers.filter(user => user.age >= 30 && user.age <= 64);
            
        case 'retired':
            return holdUsers.filter(user => user.age >= 65);     
    } 
}

// La función "filterUserByCountry" extraerá de la lista los usuarios 
// que cumplan con la condición de país, y devolverá una nueva lista
// con los usuarios filtrados

function filterUsersByCountry(filterCountry, holdUsers) {
    let userCountry = holdUsers.filter(user => user.country === filterCountry);
    return userCountry;
}

export {filterUsersByAge, filterUsersByCountry}