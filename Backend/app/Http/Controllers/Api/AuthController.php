<?php

namespace App\Http\Controllers\API;

use App\Models\Student;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        
        $student = Student::create([
            'rut'=>$request->rut,
            'password'=>Hash::make($request->password),
            'firstname'=>$request->firstname,
            'lastname'=>$request->lastname,
            'carrer'=>$request->carrer,
            'email'=>$request->email
        ]);

        $token = $student->createToken($student->rut.'_Token')->plainTextToken;

        return response()->json([
            'status'=>200,
            'studentname'=>$student->firstname,
            'token'=>$token,
            'message'=>'Registered Successfully',
        ]);
    
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'rut'=>'required|max:191',
            'password'=>'required',
        ]);

        if($validator->fails())
        {
            return response()->json([
                'validation_errors'=>$validator->messages(),
            ]);
        }
        else
        {
            $student = Student::where('rut', $request->rut)->first();

            if(! $student || ! Hash::check($request->password, $student->password))
            {
                return response()->json([
                    'status'=>401,
                    'message'=>'Invalid Credentials',
                ]);
            }
            else
            {
                if($student->role_as == 1) //1= Admin
                {
                    $role = 'admin';
                    $token = $student->createToken($student->rut.'_AdminToken', ['server:admin'])->plainTextToken;
                }
                else
                {
                    $role = '';
                    $token = $student->createToken($student->rut.'_Token', [''])->plainTextToken;
                }

                return response()->json([
                    'status'=>200,
                    'studentname'=>$student->firstname,
                    'token'=>$token,
                    'message'=>'Logged In Successfully',
                    'role'=>$role,
                ]);
            }
        }
    }


    public function logout()
    {
        auth()->user()->tokens()->delete();
        return response()->json([
            'status'=>200,
            'message'=>'Logged Out Successfully',
        ]);
    }

}