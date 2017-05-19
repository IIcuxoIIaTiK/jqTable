<?php

namespace App\Http\Controllers;

use App\Tags;
use App;
use Config;
use Illuminate\Support\Facades\Auth;
use Request;


class UserController extends Controller
{

    protected $user;
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
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
    public function addTag()
    {
        $tags = Request::input('tags');
        if(!is_array($tags)){
            $tags = [$tags];
        }
        foreach ($tags as $key=>$value){
            if(!is_numeric($value)){
                $new_tag = $this->createTag($value);
                $tags[$key] = $new_tag->id;
            } else{
                $tags[$key] = (int)$value;
            }
        }

        $this->user->tags()->sync($tags);

        $tags_id = [];
        foreach ($this->user->tags()->get()->toArray() as $value ){
            $tags_id[] = $value['pivot']['tags_id'];
        }

        return response()->json(['error' => null, 'message' => 'Добавлено', 'data' => ['tags_id' => $tags_id]]);
    }


    protected function createTag($name){
        return Tags::firstOrCreate(['name' => $name], ['name' => $name, 'locale' => App::getLocale()]);
    }

}
