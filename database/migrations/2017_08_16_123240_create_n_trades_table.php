<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNTradesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('n_trades', function (Blueprint $table) {
            $table->increments('id');
            $table->string('kat', 50);
            $table->string('type', 20);
            $table->string('brand', 20);
            $table->string('nama', 35);
            $table->string('alamat', 50);
            $table->string('cp', 35);
            $table->string('email');
            $table->string('telp', 30);
            $table->string('fax', 30);
            $table->string('product', 50);
            $table->integer('mdb');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('n_trades');
    }
}
