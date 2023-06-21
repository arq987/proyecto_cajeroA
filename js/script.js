// Datos de las cuentas
let cuentas = [
    { nombre: "Mali", saldo: 200, password: "1234"},
    { nombre: "Gera", saldo: 290, password: "4321" },
    { nombre: "Maui", saldo: 67, password: "1342" }
];

// Variables globales
var selectedAccount = null;

// Función para validar el password y mostrar opciones si es correcto
function login() {
    // Validar el password (puedes implementar tu propia lógica de validación aquí)
    let usuario = document.getElementById('user').value;
    let password = document.getElementById('password-input').value;
    for (let i = 0; i < cuentas.length; i++) {
        // Se busca que coincidan el usuario y contraseña
        if (usuario === cuentas[i].nombre && password === cuentas[i].password) {
            alert("Ingresaste");
            return true; 
        }else{
            alert("usuario y/o contraseña no coinciden")
        }
    }
    return false;
    
}

// Función para mostrar las opciones disponibles
function showOptions() {

    // Limpiar los campos de entrada
}

// Función para depositar dinero
function deposit() {
    // Limpiar el campo de entrada
}

// Función para retirar dinero
function withdraw() {

    // Limpiar el campo de entrada

}

// Función para transferir saldo entre cuentas
function transfer() {
    // Limpiar los campos de entrada

    // Restablecer el valor del select de cuenta destinataria

}

// Función para cerrar sesión y regresar al inicio de sesión
function logout() {

    // Limpiar los campos de entrada

    // Restablecer el valor del select de cuenta destinataria
}

// Event Listeners
