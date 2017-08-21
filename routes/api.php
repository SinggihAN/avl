<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => 'api'], function() {

    Route::get('/ntrades', 'NTradeController@index');
    Route::post('/ntrades', 'NTradeController@store');
    Route::patch('ntrade/{id}', 'NTradeController@update');
    Route::delete('ntrade/{id}', 'NTradeController@destroy');

    Route::get('/sourcings', 'SourcingController@index');
    Route::post('/sourcings', 'SourcingController@store');
    Route::patch('sourcing/{id}', 'SourcingController@update');
    Route::delete('sourcing/{id}', 'SourcingController@destroy');
});



