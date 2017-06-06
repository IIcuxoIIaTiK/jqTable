<?php

namespace App\Http\Controllers\Ajax;

use App\Tags;
use App\User;
use App\ResultTests;
use App\ExternalSystem;
use App;
use Config;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Http\Requests\AjaxUserCreateRequest;
use App\Http\Controllers\Controller;

class AjaxController extends Controller
{

    public function createUser($key_external_system, Request $request)
    {
        $external_system = ExternalSystem::where('key',$key_external_system)->first();
        if($external_system){
            $user = new User();
            $user->name = $request->name;
            $user->email = $request->email;
            $user->password = bcrypt($request->password);
            $user->key_external_system = $key_external_system;
            $user->save();

            $response = ['error' => false, 'message' => 'Пользователь зарегистрирован', 'result' => 'ok'];
        } else{
            $response = ['error' => true, 'message' => 'Не зарегистрирована такая внешняя система', 'result' => 'error'];
        }
        return response()->json($response);

    }

    public function addTag($key, $tag, Request $request)
    {
        if($request->user && !is_array($request->user)){
            $usersId = [$request->user];
        } else{
            $usersId = User::where('key_external_system', $key)->get()->pluck('id')->toArray();
        }

        $users = User::whereIn('id',$usersId)->get();

        $tag = Tags::firstOrCreate(['name' => $tag, 'locale' => 'ru']);

        foreach ($users as $user){
            $user->tags()->sync([$tag->id]);
        }

        return response()->json(['error' => false, 'message' => 'Пользователям добавлен тег '.$tag->name, 'result' => 'ok']);
    }


    protected function getUserResults($key, Request $request){
        $user = new User();

        if($request->name){
            $user = $user->where('name', $request->name);
        }
        if($request->email){
            $user = $user->where('email', $request->email);
        }
        $user = $user->where('key_external_system', $key)->get()->pluck('id')->toArray();
        if(!$user && count($user)){
            $response = ['error' => true, 'message' => 'Не зарегистрирован такой пользватель', 'result' => 'error'];
        }
        $ResultTests = ResultTests::with(['user','test'=>function($q){
            $q->select('id','name');
        }])->whereIn('user_id', $user);
        $ResultTests = $ResultTests->get();

        dd($ResultTests);

        return response()->json($user->result);

    }

}
