<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Servicos;

class ServicosController extends Controller
{
    public function getServicos()
        {
            $servicos = Servicos::all();

            foreach ($servicos as $servico) {
                $tempoMedio = explode(':', $servico->tempo_medio);
                $servico->tempo_medio = end($tempoMedio);
            }

            return $servicos;
        }
    }
        
       
