<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Tags;
use App\Test;
use App;
use Config;
use Auth;
class HomeController extends Controller
{
    protected $user;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');

        $this->middleware(function ($request, $next) {
            $this->user= Auth::user();

            return $next($request);
        });
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tags = Tags::where('locale', App::getLocale())->get();
        $this->user->load('tags', 'tags.tests');
        $user_tags = $this->user->tags;
        $user_tags_null = Test::where('user',$this->user->id)->whereNull('tags_id')->get();
        $tags_id = [];
        foreach ($user_tags->toArray() as $value ){
            $tags_id[] = $value['pivot']['tags_id'];
        }

        return view('home', compact('tags', 'tags_id', 'user_tags', 'user_tags_null'));
    }

    public function setLocale($locale)
    {

        if (in_array($locale, Config::get('app.locales'))) {   # Проверяем, что у пользователя выбран доступный язык
            session('locale', $locale);                    # И устанавливаем его в сессии под именем locale
        }

        return redirect()->back();
    }
}
