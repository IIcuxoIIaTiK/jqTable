<?php

namespace App\Http\Controllers;

use App\Tags;
use App\User;
use App;
use Config;
use Illuminate\Support\Facades\Auth;
use Request;
use App\Http\Requests\AjaxUserCreateRequest;


class AjaxController extends Controller
{

    public function createUser(AjaxUserCreateRequest $request)
    {
        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcypt($request->password);
        $user->key_app = $request->key_app;
        $user->save();
        return response()->json($user);
    }

    public function addTag($tag, Request $request)
    {
        if(!is_array($request->user)){
            $users = [$request->user];
        } else{
            $users = $request->user;
        }
        $users = User::whereIn('id',$users);
        foreach ($users as $user){
            $user->tags()->sync($tag);
        }
        return response()->json(['result' => 'ok']);
    }


    protected function getUserResults($id){
        $user = User::with('result')->find($id);

        return response()->json($user->result);

    }

}
