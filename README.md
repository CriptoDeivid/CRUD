🔹 Qué hace el código:
Es un CRUD básico en JavaScript que interactúa con una API (api.js) para mostrar, crear, actualizar y eliminar usuarios.

🔹 Partes principales del código:

Importación de funciones de la API

import { getUsers, deleteUser, UpdateUser } from "./api.js";


Se usan para traer, eliminar y actualizar usuarios en el servidor.

Variables iniciales

editUser: guarda el usuario que está siendo editado.

form: referencia al formulario del HTML (crud-form).

userList: referencia a la lista donde se mostrarán los usuarios.

Renderizado de usuarios

const renderUsers = async () => { ... }


Obtiene usuarios desde la API (getUsers).

Limpia la lista y agrega un <li> con botones Editar y Eliminar por cada usuario.

Manejo del formulario (submit)

const handleFormSubmit = async (event) => { ... }


Previene el envío normal del formulario.

Si editUser existe, actualiza al usuario con UpdateUser.

Limpia el formulario y vuelve a renderizar los usuarios.

Editar usuario

const handleEdit = (id, name, email) => { ... }


Guarda el usuario que se va a editar en editUser.

Carga sus datos en los campos del formulario para que puedan modificarse.

Eliminar usuario

const handleDelete = async (id) => { ... }


Llama a deleteUser para eliminarlo de la API.

Vuelve a renderizar la lista.

Event Listeners

form.addEventListener("submit", handleFormSubmit) → Maneja el guardar/editar.

userList.addEventListener("click", ...) → Detecta clics en botones Editar o Eliminar y llama a la función correspondiente.

Inicio

renderUsers();


Llama al renderizado inicial para mostrar usuarios al cargar la página.

✅ En resumen:
El código carga usuarios de una API, los muestra en una lista, y permite editarlos o eliminarlos usando botones. El formulario sirve para actualizar datos, y todo se sincroniza con la API.