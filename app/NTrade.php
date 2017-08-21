<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class NTrade extends Model
{
    use SoftDeletes;
    protected $dates = ['deleted_at'];
    protected $fillable = ['kat', 'type', 'brand', 'nama', 'alamat', 'cp', 'email', 'telp', 'fax', 'product'];
    protected $table = 'n_trades';
}

