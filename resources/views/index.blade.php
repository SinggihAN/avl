@extends('layouts.main')

@section('content')
<div class="container">
    <div class="col-md-6 col-md-offset-3"><br><br>     
        <!-- Default card starts -->
        <div class="pmd-card pmd-card-default pmd-z-depth text-center index-card">

            <!-- Card header -->
            <div class="pmd-card-title" style=""><br>
                <div class="">
                    <img src="/img/avatar.jpg" class="avatar-120">
                </div>
                <div class="media-body"><br>
                    <h3 class="pmd-card-title-text">Roman Paprotsky</h3>
                    <span class="silver-text" >PHP Laravel Web-Developer</span>
                </div><br>
            </div>
                        
            <!-- Card body -->           
            <div class="pmd-card-body">
                <i class="fa fa-envelope-o silver-text" aria-hidden="true"></i>
                <a class="extra-light-black-text" href="mailto:roman@paprotsky.com" target="_top">roman@paprotsky.com</a>
            </div>
            
            <!-- Card media actions -->
            <div class="pmd-card-actions">
                <a href="https://twitter.com/RomanPaprotsky" target="_blank">
                    <i class="fa fa-twitter fa-2x silver-text" aria-hidden="true"></i>
                </a>                
                <a href="https://www.youtube.com/channel/UC1gJrXx7mTxxYTculfiAihw" target="_blank">
                    <i class="fa fa-youtube fa-2x silver-text" aria-hidden="true"></i>
                </a>
                <a href="https://gitlab.com/paprotsky" target="_blank">
                    <i class="fa fa-gitlab fa-2x silver-text" aria-hidden="true"></i>
                </a>
            </div>
            
            <!-- Card actions -->
            <div class="pmd-card-actions">
                <a href='/demo' class="btn pmd-btn-outline btn-info">View Demo</a>
            </div>
            <br><br>
        </div>
        <!--Default card ends -->
    </div>
</div>

@endsection