<?php namespace App;
use Illuminate\Database\Eloquent\Model;

class ExternalSystem extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'key',
        'name',
    ];


    protected $table = 'external_system';

}
