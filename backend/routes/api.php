<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ServicosController;
use App\Http\Controllers\FuncionariosController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::get('servicos', [ServicosController::class, 'getServicos']);
Route::get('funcionarios', [FuncionariosController::class, 'getFuncionarios']);
Route::post('cadastro-funcionarios', [FuncionariosController::class, 'cadastroFuncionarios']);
Route::post('funcionarios-edit/{id}', [FuncionariosController::class, 'editFuncionario']);
Route::delete('funcionarios-delete/{id}', [FuncionariosController::class, 'deleteFuncionario']);

Route::post('login', [AuthController::class, 'login']);

Route::get('senha', function () {
    return bcrypt('admin');
}); // retorna senha criptografada


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
