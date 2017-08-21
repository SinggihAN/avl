@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2"><br><br>
            <div class="col-md-6 col sm-6 col-xs-6" style="border-right: 1px solid #ccc">
                <h1 class="pull-right">404</h1>
            </div>
            <div class="col-md-6 col sm-6 col-xs-6"><br>
                Whoops! Page not found!
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-8 col-md-offset-2 text-center"><br><br>
            <a href='/' class="btn pmd-btn-outline btn-info">Back to Home</a>
        </div>
    </div>
</div>
@endsection
