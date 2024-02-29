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
        $funcionarios->fill($request->all());

        if ($funcionarios->save()) {
            return response()->json(['status' => 'success', 'message' => 'Funcionário cadastrado com sucesso!'], 200);
        } else {
            return response()->json(['status' => 'error', 'message' => 'Erro ao cadastrar funcionário!'], 400);
        }
    }

    public function deleteFuncionario(Funcionarios $id)
    {
        $id->delete();
    }

    public function editFuncionario(Request $request)
    {
        dd($request);
        $funcionario = $request->all();
        dd($funcionario);
    }
}
