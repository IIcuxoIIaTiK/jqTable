<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];


    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function tags()
    {
        return $this->belongsToMany('App\Tags');
    }

    public function result()
    {
        return $this->belongsToMany('App\ResultTests', 'users', 'user_id', 'user_id');
    }

    public function external_system()
    {
        return $this->belongsTo('App\ExternalSystem', 'key_external_sources','key');
    }
}
