import Users from "../users.js";
import createUser from "../utils/createUser.js";
import deleteUser from "../utils/deleteUser.js";
import { filterUsersByAge, filterUsersByCountry } from "../utils/filterUsers.js";

const createForm = document.querySelector("#createForm");
const deleteForm = document.querySelector("#deleteForm");
const filterCountryForm = document.querySelector("#filterCountryForm");
const filterAgeForm = document.querySelector("#filterAgeForm");
const userSection = document.querySelector("#userSection");
let userList = Users;

const printUsers = (userList) => {
    userSection.innerHTML = "";
    userList.map((user) => {
        const div = document.createElement("div");
        div.classList.add("userCard");
        div.innerHTML = `<img src=${user.img ? user.img : "https://robohash.org/placeatvoluptatemsequi.png?size=50x50&set=set1"}/>
                     <div>
                        <h3>${user.first_name} ${user.last_name}</h3>
                        <span>Age: ${user.age}</span>
                        <p>${user.country}</p>
                     </div>`;
        userSection.appendChild(div);
    });
}

printUsers(userList);


// Aquí se encuentran los eventos para cada uno de los 4 formularios:

// Formulario para crear usuarios:
createForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const holdUsers = [...userList];
    const { name, lastname, age, country } = event.target;
    // Aquí se llama a la función "createUser" para crear al usuario:
    userList = createUser(name.value, lastname.value, age.value, country.value, holdUsers);

    printUsers(userList);
    createForm.reset();
});

// Formulario para eliminar usuarios por apellido:
deleteForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const holdUsers = [...userList];
    const { deleteName } = event.target;
    // Aquí se llama a la función "deleteUser" para eliminar al usuario:
    userList = deleteUser(deleteName.value, holdUsers);

    printUsers(userList);
    deleteForm.reset();
});

// Formulario para filtrar por países:
filterCountryForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const holdUsers = [...userList];
    const { filterCountry } = event.target;
    // Aquí se llama a la función "filterUsersByCountry" para 
    // para filtrar a los usuarios:
    const filteredUsers = filterUsersByCountry(filterCountry.value, holdUsers);

    printUsers(filteredUsers);
    filterCountryForm.reset();
});

// Formulario para filtrar por edad:
filterAgeForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const holdUsers = [...userList];
    const { filterAge } = event.target;
    // Aquí se llama a la función "filterUserByAge" para filtrar a los
    // usuarios:
    const filteredUsers = filterUsersByAge(filterAge.value, holdUsers);

    printUsers(filteredUsers);
});

