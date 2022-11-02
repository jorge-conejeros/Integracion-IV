<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\Student;

class StudentController extends Controller
{
    public function index()
    {
        $students = Student::all();
        // return response()->json([
        //     'studentname'=>$students->firstname,
        //     'studentlastname' =>$students->lastname
        // ]);
        return $students;
    }
    public function store(Request $request)
    {
        //
    }

    public function show(Request $request)
    {
        $student = Student::where('rut', $request->rut)->first();
        return response()->json([
            'studentname'=>$student->firstname,
            'studentlastname'=>$student->lastname
        ]);
        // return $student;
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }
   
}
