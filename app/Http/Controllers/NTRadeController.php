<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Validator;
use App\Response;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Auth;
use App\NTrade;

class NTradeController extends Controller
{
    public function main()
    {
        return view('index');
    }

    public function ntrade()
    {
        return view('ntrade');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $ntrades = NTrade::latest()->paginate(1000);

        $response = [
            'pagination' => [
                'total' => $ntrades->total(),
                'per_page' => $ntrades->perPage(),
                'current_page' => $ntrades->currentPage(),
                'last_page' => $ntrades->lastPage(),
                'from' => $ntrades->firstItem(),
                'to' => $ntrades->lastItem(),
            ],
            'data' => $ntrades,
        ];

        return response()->json($response);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $create = new NTrade([
          'kat' => $request->get('kat'),
          'type' => $request->get('type'),
          'brand' => $request->get('brand'),
          'nama' => $request->get('nama'),
          'alamat' => $request->get('alamat'),
          'cp' => $request->get('cp'),
          'email' => $request->get('email'),
          'telp' => $request->get('telp'),
          'fax' => $request->get('fax'),
          'product' => $request->get('product')
        ]);

        $create->save();
        return response()->json($create);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $edit = NTrade::findOrFail($id)->update($request->all());
        return response()->json($edit);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return NTrade::destroy($id);
    }

}
