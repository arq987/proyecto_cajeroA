// Datos de las cuentas
let cuentas = [
    { nombre: "Mali", saldo: 200, password: "1234", logged: false },
    { nombre: "Gera", saldo: 290, password: "4321", logged: false },
    { nombre: "Maui", saldo: 67, password: "1342", logged: false }
];

// Función para realizar el inicio de sesión
function login() {
    const usuarioInput = document.getElementById("user").value;
    const passwordInput = document.getElementById("password-input").value;
    let logueado = false;

    for (let i = 0; i < cuentas.length; i++) {
        if (usuarioInput === cuentas[i].nombre && passwordInput === cuentas[i].password) {
            document.getElementById("account-name").textContent = cuentas[i].nombre;
            document.getElementById("balance-amount").textContent = "Saldo actual: $"+cuentas[i].saldo;
            cuentas[i].logged = true;
            logueado = true;
            break;
        }
    }
    if (logueado) {
        document.getElementById("login").style.display = "none";
        document.getElementById("transactions").style.display = "block";
        return true;
    } else {
        alert("Usuario y/o contraseña incorrectos. Por favor, intenta nuevamente.");
        return false;
    }


}


// Función para mostrar las opciones disponibles
function showOptions() {
    // Limpiar los campos de entrada

}

// Función para depositar dinero

function deposit() {
    
    let deposit = parseInt(document.getElementById('deposit-input').value);
    for (let i = 0; i < cuentas.length; i++) {
        if (cuentas[i].logged == true && deposit > 0) {
            let resultado = cuentas[i].saldo + deposit;
            if (resultado <= 990) {
                cuentas[i].saldo = resultado;
                document.getElementById("balance-amount").textContent = "Saldo actual: $"+ resultado;
                document.getElementById('deposit-input').value = "";
            }else{
                alert("Supera el monto máximo de $990");
                document.getElementById('deposit-input').value = "";
            }
            break;
        }
    }
}

// Función para retirar dinero
function withdraw() {
    // Limpiar el campo de entrada
    let withdraw = parseInt(document.getElementById('withdraw-input').value)
    for (let i = 0; i < cuentas.length; i++) {
        if (cuentas[i].logged == true && withdraw > 0) {
            let resultado = cuentas[i].saldo - withdraw;
            if (resultado >= 10) {
                cuentas[i].saldo = resultado;
                document.getElementById("balance-amount").textContent ="Saldo actual: $"+ resultado;
                document.getElementById('withdraw-input').value = "";
            }else{
                alert("No es posible la transacción, la cuenta no puede tener un saldo menor a $10");
                document.getElementById('withdraw-input').value = "";
            }
            break;
        }
    }

}
// Función para transferir saldo entre cuentas
function transfer() {

}

// Función para cerrar sesión
function logout() {
    document.getElementById("login").style.display = "block";
    document.getElementById("transactions").style.display = "none";
    document.getElementById("user").value = "";
    document.getElementById("password-input").value = "";
}

// Event Listeners
// document.getElementById("login-btn").addEventListener("click", login);
// document.getElementById("deposit-btn").addEventListener("click", deposit);
// document.getElementById("withdraw-btn").addEventListener("click", withdraw);
// document.getElementById("transfer-btn").addEventListener("click", transfer);
// document.getElementById("logout-btn").addEventListener("click", logout);
