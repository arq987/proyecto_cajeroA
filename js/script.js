// Datos de las cuentas
let cuentas = [
    { nombre: "Mali", saldo: 200, password: "1234", logged: false},
    { nombre: "Gera", saldo: 290, password: "4321", logged: false},
    { nombre: "Maui", saldo: 67, password: "1342", logged: false}
];

// Función para realizar el inicio de sesión
function login() {
    const usuarioInput = document.getElementById("user").value;
    const passwordInput = document.getElementById("password-input").value;

    for (let i = 0; i < cuentas.length; i++) {
        if (usuarioInput === cuentas[i].nombre && passwordInput === cuentas[i].password) {
            cuentas[i].logged = true;
            document.getElementById("account-name").textContent = cuentas[i].nombre;
            document.getElementById("balance-amount").textContent = cuentas[i].saldo;
            document.getElementById("login").style.display = "none";
            document.getElementById("transactions").style.display = "block";
            break;
        } else {
            alert("Usuario y/o contraseña incorrectos. Por favor, intenta nuevamente.");
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
   
}

// Función para cerrar sesión
function logout() {
    
}

// Event Listeners
document.getElementById("login-btn").addEventListener("click", login);
document.getElementById("deposit-btn").addEventListener("click", deposit);
document.getElementById("withdraw-btn").addEventListener("click", withdraw);
document.getElementById("transfer-btn").addEventListener("click", transfer);
document.getElementById("logout-btn").addEventListener("click", logout);
