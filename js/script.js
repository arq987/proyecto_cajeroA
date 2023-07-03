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
        
        let cuentaLogueada = document.getElementById("recipient-account-select");
        cuentaLogueada.innerHTML = "";
        //Valida cuentas no logueadas para agregar en el select de cuentas a transferir
        for (let i = 0; i < cuentas.length; i++) {
            if (!cuentas[i].logged) {
              const option = document.createElement("option");
              option.value = i.toString();
              option.textContent = cuentas[i].nombre;
              cuentaLogueada.appendChild(option);
            }
          }
          //Muestra el formulario de transacciones y oculta el login
        document.getElementById("login").style.display = "none";
        document.getElementById("transactions").style.display = "block";
        return true;
    } else {
        //Muestra alerta si no coincide el usuario y/o contraseña
        alert("Usuario y/o contraseña incorrectos. Por favor, intenta nuevamente.");
        return false;
    }


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
    let montoTransferir = parseInt(document.getElementById('transfer-input').value);
    let cuentaTranferir = document.getElementById('recipient-account-select').value;
  
    let cuentaLogueada = null;
    for (let i = 0; i < cuentas.length; i++) {
      if (cuentas[i].logged) {
        cuentaLogueada = cuentas[i];
        break;
      }
    }
  
    if (cuentaLogueada && montoTransferir > 0 && montoTransferir <= 990 && cuentaLogueada.saldo - montoTransferir >= 10) {
      let cuentaTransferencia = cuentas[cuentaTranferir];
  
      if (cuentaTransferencia && cuentaTransferencia.saldo + montoTransferir <= 990) {
        cuentaLogueada.saldo -= montoTransferir;
        cuentaTransferencia.saldo += montoTransferir;
  
        document.getElementById("balance-amount").textContent = "Saldo actual: $" + cuentaLogueada.saldo;
        document.getElementById('transfer-input').value = "";
      } else {
        alert("La cuenta destino supera el monto máximo de $990");
      }
    }
  }
  

// Función para cerrar sesión
function logout() {
    for (let i = 0; i < cuentas.length; i++) {
        if (cuentas[i].logged) {
          cuentas[i].logged = false;
          break;
        }
      }
    document.getElementById("login").style.display = "block";
    document.getElementById("transactions").style.display = "none";
    document.getElementById("user").value = "";
    document.getElementById("password-input").value = "";
}
