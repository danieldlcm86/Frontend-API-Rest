const registrar = document.getElementById('submit');

registrar.addEventListener('click', () => {
    const nombreUsuario = document.getElementById('username').value;
    const correoElectronico = document.getElementById('email').value;
    const contrasena = document.getElementById('password').value;

    // Crear mi objeto que interactúa con el backend


    // Comenzar con la llamada de la API (fetch, asynch-await, axios)
    const url = ``;

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log('Guardado', data)
        })
        .catch(error => {
            console.error(error);
        })

})

// Mostrar a todos los usuarios registrados
    // const urlUsers = ``;

    fetch(urlUsers)
        .then(response => response.json())
        .then(data => {
            if (data.length === 0) {
                usersInfo.innerHTML = `<p>No hay usuarios registrados.</p>`;
                return;
            }

            let users = `<h3>Usuarios registrados:</h3>`;
            data.forEach(user => {
                users += `
                    <div style="margin-bottom: 1rem; padding: 0.5rem; border: 1px solid #ccc; border-radius: 5px;">
                        <p><strong>Nombre de usuario:</strong> ${user.username}</p>
                        <p><strong>Correo electrónico:</strong> ${user.email}</p>
                    </div>
                `;
            });

            usersInfo.innerHTML = users;
        })
        .catch(error => {
            usersInfo.innerHTML = `<p>Error al cargar los usuarios.</p>`;
            console.error(error);
        });