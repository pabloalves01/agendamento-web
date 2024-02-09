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

    public function cadastroFuncionarios(Request $request)
    {
        $funcionarios = new Funcionarios;
        $funcionarios->nome_funcionario = $request->nome;
        $funcionarios->funcao = $request->cargo;
        $funcionarios->save();
        return $funcionarios;
    }
}
