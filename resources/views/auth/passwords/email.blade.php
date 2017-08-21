@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-4 col-md-offset-4">
            <!-- Card header -->
            <div class="pmd-card pmd-card-default pmd-z-depth pmd-card-custom-form">
                <div class="pmd-card-title">
                    <h2 class="pmd-card-title-text">Reset Password</h2>
                </div>
                <div class="pmd-card-body">
                    @if (session('status'))
                        <div class="alert alert-success">
                            {{ session('status') }}
                        </div>
                    @endif

                    <form class="form-horizontal" role="form" method="POST" action="{{ route('password.email') }}">
                        {{ csrf_field() }}

                        <!-- Regular Input with Floating labels -->
                        <div class="form-group pmd-textfield pmd-textfield-floating-label {{ $errors->has('email') ? ' has-error' : '' }}">
                           <label for="email" class="control-label">
                             E-Mail Address
                           </label>
                           <input id="email" type="email" class="form-control" name="email" value="{{ old('email') }}" required >
                           @if ($errors->has('email'))
                               <span class="help-block">
                                   <strong>{{ $errors->first('email') }}</strong>
                               </span>
                           @endif
                        </div>

                        <div class="form-group">
                            <button type="submit" class="btn pmd-btn-raised btn-primary">
                                Send Password Reset Link
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
