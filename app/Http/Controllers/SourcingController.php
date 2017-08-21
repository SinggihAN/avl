<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Validator;
use App\Response;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Auth;
use App\Sourcing;

class SourcingController extends Controller
{

    public function sourcing()
    {
        return view('sourcing');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $sourcings = Sourcing::latest()->paginate(1000);

        $response = [
            'pagination' => [
                'total' => $sourcings->total(),
                'per_page' => $sourcings->perPage(),
                'current_page' => $sourcings->currentPage(),
                'last_page' => $sourcings->lastPage(),
                'from' => $sourcings->firstItem(),
                'to' => $sourcings->lastItem(),
            ],
            'data' => $sourcings,
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
        $create = new Sourcing([
          'kat' => $request->get('kat'),
          'prio' => $request->get('prio'),
          'type' => $request->get('type'),
          'nama' => $request->get('nama'),
          'email' => $request->get('email'),
          'country' => $request->get('country'),
          'remarks' => $request->get('remarks'),
          'telp' => $request->get('telp'),
          'fax' => $request->get('fax'),
          'pic' => $request->get('pic')
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
        $edit = Sourcing::findOrFail($id)->update($request->all());
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
        return Sourcing::destroy($id);
    }

}
