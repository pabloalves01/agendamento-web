<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Funcionarios extends Model
{
    use HasFactory;
    protected $table = 'barbearia_funcionarios';
    protected $fillable = ['nome', 'email', 'telefone', 'flag_ativo'];
}
