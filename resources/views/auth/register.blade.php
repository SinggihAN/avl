@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-4 col-md-offset-4">
            <!-- Card header -->
            <div class="pmd-card pmd-card-default pmd-z-depth pmd-card-custom-form">
                <div class="pmd-card-title">
                    <h2 class="pmd-card-title-text">Register</h2>
                </div>
                <div class="pmd-card-body">
                    <form class="form-horizontal" role="form" method="POST" action="{{ route('register') }}">
                        {{ csrf_field() }}

                        <!-- Regular Input with Floating labels -->
                        <div class="form-group pmd-textfield pmd-textfield-floating-label {{ $errors->has('email') ? ' has-error' : '' }}">
                           <label for="name" class="control-label">
                             Name
                           </label>
                           <input id="name" type="name" class="form-control" name="name" value="{{ old('name') }}" required autofocus>
                           @if ($errors->has('name'))
                               <span class="help-block">
                                   <strong>{{ $errors->first('name') }}</strong>
                               </span>
                           @endif
                        </div>

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

                        <!-- Regular Input with Floating labels -->
                        <div class="form-group pmd-textfield pmd-textfield-floating-label {{ $errors->has('role') ? ' has-error' : '' }}">
                           <label for="role" class="control-label">
                             Role
                           </label>
                           <input id="role" type="role" class="form-control" name="role" value="{{ old('role') }}" required autofocus>
                           @if ($errors->has('role'))
                               <span class="help-block">
                                   <strong>{{ $errors->first('role') }}</strong>
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

                        <!-- Password Confirm Input -->
                        <div class="form-group pmd-textfield pmd-textfield-floating-label">
                          <label for="password-confirm" class="control-label">
                            Confirm Password
                          </label>
                          <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required>
                          @if ($errors->has('password'))
                              <span class="help-block">
                                  <strong>{{ $errors->first('password') }}</strong>
                              </span>
                          @endif
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn pmd-btn-raised btn-primary">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
