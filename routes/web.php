<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//http://kursach.test/api/v1/key/user/?name=dima&age=27
Route::get('/api/v1/{key}/user/', 'Ajax\AjaxController@createUser');
Route::get('/api/v1/{key}/add_tag/{name_tag}', 'Ajax\AjaxController@addTag');
Route::get('/api/v1/{key}/getUserResults', 'Ajax\AjaxController@getUserResults');

Route::group(['prefix' => 'auth'],
    function () {
        Auth::routes();
    }
);

Route::get('/command_run',
    function () {
//        $output1 = `php ../artisan migrate:refresh`;
//        $output1 = `../composer.phar dump-autoload -o`;
        $output1 = `php ../artisan migrate:refresh --seed`;
        $output  = `pwd`;
        echo($output1);
    }
);
Route::get('/',
    function () {
        return view('welcome');
    }
);
Route::post('/create_test', 'TestController@saveTest');

Route::get('/create_test', 'TestController@create')->name('get.create_test');

Route::put('/create_test',
    function () {
        return view('pages.create_test');
    }
);

Route::get('/watch_test',
    function () {
        return view('pages.create_test');
    }
);

Route::get('/go_test/{id}', ['as'=>'go_test', 'uses'=>'TestController@goTest']);
Route::get('/getTest/{id}', ['as'=>'getTest', 'uses'=>'TestController@getTest']);
Route::post('/go_test/{id}', ['as'=>'postTest', 'uses'=>'TestController@postTest']);

Route::group(['middleware' => ['web', 'auth']],
    function () {
        Route::get('/home', ['as'=>'get.home', 'uses'=>'HomeController@index']);
        Route::get('/set_locale/{locale}', ['uses' => 'HomeController@setLocale']);
        Route::get('/show_result_test/{id}', ['uses' => 'TestController@showResultTest'])->name('show_result_test');

        Route::get('/add_tag/', ['uses' => 'UserController@addTag'])->name('add_tag_to_current_user');
    }
);






