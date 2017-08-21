<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSourcingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sourcings', function (Blueprint $table) {
            $table->increments('id');
            $table->string('kat', 50);
            $table->string('prio', 2);
            $table->string('type', 10);
            $table->string('nama', 35);
            $table->string('email');
            $table->string('country', 20);
            $table->string('remarks', 50);
            $table->string('telp', 30);
            $table->string('fax', 30);
            $table->string('pic', 35);
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
        Schema::dropIfExists('sourcings');
    }
}
