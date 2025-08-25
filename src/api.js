const API_URL = "https://jsonplaceholder.typicode.com/users";

//getUsers
export const getUsers = async () => {
    const response = await fetch(API_URL);
    return await response.json();
};


//DeleteUser
export const deleteUser = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
    });
    return await response.json();
};

//EditUser -> adduser
export const UpdateUser = async (id, user) => {
    const url = user.id ? `${API_URL}/${id}` : API_URL;

    const response = await fetch(url, {
        method: user.id ? "PUT" : "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });
    return await response.json();
}


//una condicion que me diga si estoy editando o no un usuario
export const isEditing = (user) => {
    return user.id !== undefined;
};