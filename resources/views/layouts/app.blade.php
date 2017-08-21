<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'AVL') }}</title>
    <link rel="shortcut icon" href="{{URL::asset('img/icons/account_circle.png')}}">
    <!-- Google icon -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/all.css') }}" rel="stylesheet">
    <link href="{{ asset('css/dataTables.css') }}" rel="stylesheet">
    <link href="{{ asset('css/propeller-theme.css') }}" rel="stylesheet">
    <link href="{{ asset('css/propeller-admin.css') }}" rel="stylesheet">
    <!-- Scripts -->
    <script>
        window.Laravel = {!! json_encode([
            'csrfToken' => csrf_token(),
        ]) !!};
    </script>
</head>
<body>
    {{-- @include('analytics')   --}}

    <div>
        <nav class="navbar navbar-inverse navbar-fixed-top pmd-navbar pmd-z-depth">
          <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
              <button class="pmd-ripple-effect navbar-toggle pmd-navbar-toggle" type="button">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a href="{{ url('/') }}" class="navbar-brand navbar-brand-custome">{{ config('app.name', 'AVL') }}</a>
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div id="bs-example-navbar-collapse-1" class="collapse navbar-collapse pmd-navbar-sidebar">
                <ul class="nav navbar-nav navbar-right" style="margin-right: 10px;">
                    <!-- Authentication Links -->
                    @if (Auth::guest())
                    @else
                    <li class="dropdown">
                      <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{ Auth::user()->name }} <span class="caret"></span></a>
                      <ul class="dropdown-menu dropdown-menu-right">
                        <li>
                            <a href="{{ route('logout') }}"
                                onclick="event.preventDefault();
                                         document.getElementById('logout-form').submit();">
                                Logout
                            </a>

                            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                {{ csrf_field() }}
                            </form>
                        </li>
                      </ul>
                    </li>
                    @endif
                </ul>
                    
              <ul class="nav navbar-nav">
                @if (Auth::guest())
                @else
                <li class="{{ Request::is('ntrade') || Request::is('/') ? 'active' : null }}"><a class="pmd-ripple-effect" href="{{ url('ntrade') }}">Non Trade <span class="sr-only">(current)</span></a></li>
                <li class="{{ Request::is('sourcing') ? 'active' : null }}"><a class="pmd-ripple-effect" href="{{ url('sourcing') }}">Sourcing</a></li>
                @endif
              </ul>              
            </div><!-- /.navbar-collapse -->
            
          </div><!-- /.container-fluid -->
        </nav>

        <div id="content" class="pmd-content" style="margin-left: 20px; margin-right: 20px;">
            @yield('content')
        </div>
    </div>

    <!-- Scripts -->
    <script src="{{ asset('js/manifest.js') }}"></script>
    <script src="{{ asset('js/vendor.js') }}"></script>
    @if (Request::is('ntrade') || Request::is('/'))
    <script src="{{ asset('js/ntrade.js') }}"></script>
    @elseif (Request::is('sourcing'))
    <script src="{{ asset('js/sourcing.js') }}"></script>
    @endif
    <script src="{{ asset('js/all.js') }}"></script>

</body>
</html>
