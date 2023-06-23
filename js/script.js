// Datos de las cuentas
let cuentas = [
    { nombre: "Mali", saldo: 200, password: "1234", logged: false},
    { nombre: "Gera", saldo: 290, password: "4321", logged: false},
    { nombre: "Maui", saldo: 67, password: "1342", logged: false}
];

// Variables globales
var selectedAccount = null;

// Función para validar el password y mostrar opciones si es correcto
function login() {
    // Validar el password (puedes implementar tu propia lógica de validación aquí)
    let usuario = document.getElementById('user').value;
    let password = document.getElementById('password-input').value;
    for (let i = 0; i < cuentas.length; i++) {
        if (usuario === cuentas[i].nombre && password === cuentas[i].password) {
            cuentas[i].logged = true;
            document.getElementById('balance-amount').innerHTML = `${cuentas[i].saldo} USD`;
            alert("Ingresaste");
            break;
        } else {
            alert("Usuario y/o contraseña no coinciden");
        }
    }
}

// Función para mostrar las opciones disponibles
function showOptions() {
        // Limpiar los campos de entrada

}

// Función para depositar dinero
function deposit() {
    // Limpiar el campo de entrada
    let deposit = parseInt(document.getElementById('deposit-input').value)
    for (let i = 0; i < cuentas.length; i++){
        if(cuentas[i].logged == true){
            if(cuentas[i].saldo > 10 && cuentas[i].saldo < 990){
                let resultado = cuentas[i].saldo += deposit; 
                alert(`Nuevo saldo ${resultado}`)
            }
        }
    }
}

// Función para retirar dinero
function withdraw() {
    // Limpiar el campo de entrada
    let deposit = parseInt(document.getElementById('withdraw-input').value)
    for (let i = 0; i < cuentas.length; i++){
        if(cuentas[i].logged == true){
            if(cuentas[i].saldo > 10){
                let resultado = cuentas[i].saldo -= deposit; 
                alert(`Nuevo saldo ${resultado}`)
            }
        }
    }

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
