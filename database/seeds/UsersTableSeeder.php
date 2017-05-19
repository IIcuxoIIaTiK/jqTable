<?php

use Illuminate\Database\Seeder;
use App\User;

class UsersTableSeeder extends Seeder
{

    public function run()
    {
        $users = [
            [
                'name'     => 'IIcux',
                'email'    => 'stalker7600@gmail.com',
                'password' => bcrypt(123123),
            ]
        ];

        foreach ($users as $value) {
            User::updateOrCreate(['name'=>$value['name']], $value);
        }
    }
}