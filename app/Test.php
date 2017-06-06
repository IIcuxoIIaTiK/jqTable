<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Test extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'description',
        'tags_id',
        'settings',
        'questions',
        'user',
    ];
    protected $casts = [
        'settings' => 'array',
        'questions' => 'array',
    ];

    public function result()
    {
        return $this->hasMany('App\ResultTests');
    }
    public function result_this_user($id)
    {
        return $this->hasMany('App\ResultTests')->where('user_id', $id);
    }


    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [

    ];
}
