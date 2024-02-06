<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Servicos extends Model
{
    use HasFactory;
    protected $table = 'barbearia_servicos';
    protected $fillable = ['nome_servico', 'valor', 'tempo_medio'];
}
