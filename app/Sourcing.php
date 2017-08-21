<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Sourcing extends Model
{
    use SoftDeletes;
    protected $dates = ['deleted_at'];
    protected $fillable = ['kat', 'prio', 'type', 'nama', 'email', 'country', 'remarks', 'telp', 'fax', 'pic'];
    protected $table = 'sourcings';
}
