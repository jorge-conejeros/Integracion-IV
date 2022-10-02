<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function show(){
        return view('home'); 
    }

    public function login(){
        echo "Este es el controlador";
    }
}