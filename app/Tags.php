<?php namespace App;
use Illuminate\Database\Eloquent\Model;

class Tags extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'locale'
    ];

    public function tests()
    {
        return $this->hasMany('App\Test');
    }


    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */

}
