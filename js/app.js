// Simulador interactivo de login.

let usuario = 72774415;
let password = 'abc123';

function validarAcceso (a, b) {
    let usuarioInput = parseInt(prompt('Indique el número identificador de su usuario: '));
    while (usuarioInput === '' || isNaN(usuarioInput)) {
        alert('Inserta un número identificador válido.');
        usuarioInput = parseInt(prompt('Indique el número identificador de su usuario: '));
    }

    if (usuarioInput === a) {
        let intentos = 3;
        let passwordInput = prompt('Indique la contraseña: ').toLowerCase();
        while (passwordInput !== b && intentos > 1) {
            intentos -= 1;
            alert(`La contraseña no es correcta. Vuelva a colocar la contraseña. Le quedan ${intentos} intento/s.`);
            passwordInput = prompt('Indique la contraseña: ').toLowerCase();
        }

        if(passwordInput === b) {
            alert('Accediste');
        } else {
            alert('Contraseña incorrecta. Agotaste los intentos.')
        }

    } else {
        alert('Usuario no identificado.');
    }
}

validarAcceso(usuario, password);