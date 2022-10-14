<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use DB;

class StudentController extends Controller
{

    public function home()
    {
        $query=DB::table('students')
        ->join('cursos', 'cursos.usuario_id', '=', 'students.id')
        ->select('students.Nombres', 'students.Apellidos', 'students.Carrera', 'cursos.Ramo', 'cursos.Día')
        ->get();
        return view('home',['datos'=>$query]);
    }

}
