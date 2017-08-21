@extends('layouts.app')

@section('content')
<div class="container-fluid" style="margin-top: 40px;">
    <div class="row">
        <div class="col-md-4 col-md-offset-4">
            <!-- Card header -->
            <div class="pmd-card pmd-card-default pmd-z-depth pmd-card-custom-form">
                <div class="pmd-card-title">
                    <h2 class="pmd-card-title-text">Login</h2>
                </div>
                <div class="pmd-card-body">
                    <form class="form-horizontal" role="form" method="POST" action="{{ route('login') }}">
                        {{ csrf_field() }}

                        <!-- Regular Input with Floating labels -->
                        <div class="form-group pmd-textfield pmd-textfield-floating-label {{ $errors->has('email') ? ' has-error' : '' }}">
                           <label for="email" class="control-label">
                             E-Mail Address
                           </label>
                           <input id="email" type="email" class="form-control" name="email" value="{{ old('email') }}" required>
                           @if ($errors->has('email'))
                               <span class="help-block">
                                   <strong>{{ $errors->first('email') }}</strong>
                               </span>
                           @endif
                        </div>

                        <!-- Password Input -->
                        <div class="form-group pmd-textfield pmd-textfield-floating-label {{ $errors->has('password') ? ' has-error' : '' }}">
                          <label for="password" class="control-label">
                            Password
                          </label>
                          <input id="password" type="password" class="form-control" name="password" required>
                          @if ($errors->has('password'))
                              <span class="help-block">
                                  <strong>{{ $errors->first('password') }}</strong>
                              </span>
                          @endif
                        </div>

                        <div class="form-group">
                            <label class="checkbox-inline pmd-checkbox pmd-checkbox-ripple-effect">
                                <input type="checkbox" name="remember" {{ old('remember') ? 'checked' : '' }}>
                                <span class="pmd-checkbox"> Remember Me</span> 
                            </label>
                        </div>

                        <div class="form-group">
                            <button type="submit" id="btnsubmit" class="btn pmd-btn-raised btn-primary">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
    <script src="{{ asset('js/app.js') }}"></script>
@endsection
