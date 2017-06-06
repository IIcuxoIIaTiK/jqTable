<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="/fonts/css.css" rel="stylesheet" type="text/css">
        <script   src="/plugins/jquery-3.1.1.min.js"   integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="   crossorigin="anonymous"></script>
        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="/css/bs-3_3_7//bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

        <!-- Optional theme -->
        <link rel="stylesheet" href="/css/bs-3_3_7/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

        <!-- Latest compiled and minified JavaScript -->
        <script src="/plugins/bs-3_3_7/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
        <!-- Styles -->
        <link href="/css/welcome.css" rel="stylesheet" type="text/css">

    </head>
    <body>


    <form id="logout-form" action="{{ url('/auth/logout') }}" method="POST" style="display: none;">
        {{ csrf_field() }}
    </form>
        <div class="flex-center position-ref full-height overflow-hidden">


                <div class="top-right links">

                    @if (Route::has('login'))
                        @if (Auth::check())
                            <a href="{{ route('get.home') }}">@lang('menu.home')</a>
                            <a href="{{ url('/logout') }}"
                               onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                @lang('menu.logout')
                            </a>
                        @else
                            <a class="show_welcome" href="#">Главная</a>
                            <a href="{{ url('/auth/login') }}" class="show_login">@lang('menu.login')</a>
                            <a href="{{ url('/auth/register') }}" class="show_register">@lang('menu.register')</a>
                        @endif
                    @endif
                </div>


            <div class="content content-welcome show">
                <div class="title m-b-md">
                    IIcuxTEST {{App::getLocale()}}
                </div>

                <div class="links">
                    <a href="{{ route('get.create_test') }}">Создать тест</a>
                    <a  disabled="">Руководство</a>
                </div>
            </div>
            <div class="content content-login ">
                <div class="title m-b-md">
                    @lang('menu.login')
                </div>

                <div class="links">
                   @include('auth.login')
                </div>
            </div>
            <div class="content content-register">
                <div class="title m-b-md">
                    @lang('menu.register')
                </div>

                <div class="links">
                    @include('auth.register')
                </div>
            </div>

        </div>
    </body>

    <script>
        $('.show_login').click(function(e) {
            e.preventDefault()
            $('.content-login').parent().find('.show').removeClass('show');
            $('.content-login').addClass('show');

        });
        $('.show_register').click(function(e) {
            e.preventDefault()
            $('.content-register').parent().find('.show').removeClass('show');
            $('.content-register').addClass('show');;
        });
        $('.show_welcome').click(function(e) {
            e.preventDefault()
            $('.content-welcome').parent().find('.show').removeClass('show');
            $('.content-welcome').addClass('show');;
        });

    </script>
</html>
