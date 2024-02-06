<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Funcionarios;

class FuncionariosController extends Controller
{
    public function getFuncionarios()
    {
        $funcionarios = Funcionarios::all();
        return $funcionarios;
    }
}
