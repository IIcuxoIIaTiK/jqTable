<?php

use Illuminate\Database\Seeder;
use App\Tags;

class TagsSeeder extends Seeder
{

    public function run()
    {

        $tags = [
            [
                'name'   => 'it-431',
                'locale' => 'ru',
            ]

        ];

        foreach ($tags as $value) {
            Tags::updateOrCreate(['name'=>$value['name']], $value);
        }
    }
}