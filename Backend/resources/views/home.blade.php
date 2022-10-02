<!DOCTYPE html>
<head>
    <title>Chato</title>
</head>
<body>
    <div>
        <form method="POST" action="login">
            @csrf
            <table>
                <tr>
                    <td>Rut:</td>
                    <td><input type="text" name="txtUsuario" placeholder="201234569"></td>
                </tr>
                <tr>
                    <td>Contraseña:</td>
                    <td><input type="password" name="txtClave"></td>
                </tr>
                <tr>
                    <td colspan="2"><input type="submit" value="Ingresar"></td>
                </tr>
            </table>
        </form>
    </div>
</body>
</html>