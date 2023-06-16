< !DOCTYPE html >
    <html lang="es">
        <head>
            <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Cajero Automatico</title>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"
                        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
                        <link rel="stylesheet" href="style.css">
                        </head>
                        <body>
                            <div class="container">
                                <h1>Cajero Automatico</h1>
                                <div id="login" class="form-group">
                                    <label for="account-select">Seleccione una cuenta:</label>
                                    <select id="account-select" class="form-control">
                                        <option value="1">Persona 1</option>
                                        <option value="2">Persona 2</option>
                                        <option value="3">Persona 3</option>
                                    </select>
                                    <input type="password" id="password-input" class="form-control" placeholder="Ingresa tu contraseña">
                                        <button id="login-btn" class="btn btn-primary">Ingresar</button>
                                </div>
                                <div id="transactions" class="hidden">
                                    <h2>Bienvenido(a), <span id="account-name"></span>!</h2>

                                </div>
                            </div>
                            <script src="script.js"></script>
                        </body>
                    </html>