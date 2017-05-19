<div class="div-login">
    <form class="form-horizontal login-form" role="form" method="POST" action="{{ url('/auth/login') }}">
        {{ csrf_field() }}

        <div class="col-md-4 "></div>
        <div class="col-md-4">
            <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                <div class="position-ref">
                    @if ($errors->has('email'))
                        <span class="help-block">
                            <strong>{{ $errors->first('email') }}</strong>
                        </span>
                    @endif
                    <div class="position-ref">
                        <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
                        <input id="email" type="email" class="form-control" name="email" value="{{ old('email') }}" required autofocus  placeholder="email">
                    </div>
                </div>
            </div>

            <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                <div class="position-ref">
                    @if ($errors->has('password'))
                        <span class="help-block">
                            <strong>{{ $errors->first('password') }}</strong>
                        </span>
                    @endif
                    <div class="position-ref">
                        <span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span>
                        <input id="password" type="password" class="form-control" name="password" placeholder="password" required>
                    </div>
                </div>
            </div>
        </div>




        <div class="form-group">
            <div class="col-md-6 col-md-offset-4">

            </div>
        </div>

        <div class="form-group">
            <div class="col-md-4 col-md-offset-4" >
                <div class="col-md-4">
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="remember" {{ old('remember') ? 'checked' : '' }}> Remember Me
                        </label>
                    </div>
                </div>
                <div class="col-md-4">
                    <button type="submit" class="btn btn-primary">
                        Login
                    </button>
                </div>
                <div class="col-md-4">
                    <a class="btn btn-link" href="{{ url('/password/reset') }}">
                        Forgot Your Password?
                    </a>
                </div>
            </div>

        </div>
    </form>
</div>

