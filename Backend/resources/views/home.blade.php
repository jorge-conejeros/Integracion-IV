<!DOCTYPE html>
<head>
    <title>Probando Cositas</title>
</head>
<body>
    <div>
        <table>
            <tbody>
                @foreach($datos as $s)
                <tr>
                    <td>{{$s->Nombres}}</td>
                    <td>{{$s->Apellidos}}</td>
                    <td>{{$s->Carrera}}</td>
                    <td>{{$s->Ramo}}</td>
                    <td>{{$s->Día}}</td>
                </tr>
                @endforeach
            </tbody>
        </table>
    </div>
</body>
</html>