<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ResultTests extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'test_id',
        'user_id',
        'result',
        'max_ball',
        'user_ball',

    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [

    ];

    protected $table = 'result_tests';


    public function user()
    {
        return $this->belongsTo('App\User');
    }
    public function test()
    {
        return $this->belongsTo('App\Test');
    }
}
