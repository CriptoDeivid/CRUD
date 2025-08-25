import { getUsers, deleteUser, UpdateUser} from "./api.js";

let editUser = null
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("crud-form");
    const userList = document.getElementById("user-list");

//RenderUsers
const renderUsers = async () => {
    const users = await getUsers();
    const userList = document.getElementById("user-list");
    userList.innerHTML = "";
    users.forEach(user => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${user.name} (${user.email})</span>
            <button type="button" class="edit-button" data-id="${user.id}">Edit</button>
            <button type="button" class="delete-button" data-id="${user.id}">Delete</button>
        `;
        userList.appendChild(li);
    });
};


//manejar el submint
const handleFormSubmit = async (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    if (editUser) {
        await UpdateUser(editUser.id, { name, email });
    } else {
        await UpdateUser(null, { name, email });
    }

form.reset();
renderUsers();

};

//manejar el edit

const handleEdit = async (id, name, email) => {
    editUser = { name, email, id };
    document.getElementById("name").value = name;
    document.getElementById("email").value = email;
};


//manejar el delete
const handleDelete = async (id) => {
    await deleteUser(id);
    renderUsers();
};


//agregar eventos al html
form.addEventListener("submit", handleFormSubmit);

userList.addEventListener("click", (event) => {
    const target = event.target;
    if (target.classList.contains("edit-button")) {
        const userId = target.getAttribute("data-id");
        const user = Array.from(target.parentNode.children)[0].innerText.split(" (");
       const userName = user[0];
       const userEmail = user[1].replace(")", "");
       handleEdit(userId, userName, userEmail);
    }
       else if (target.classList.contains("delete-button")) {
        const userId = target.getAttribute("data-id");
        handleDelete(userId);
    }

});

renderUsers();
});