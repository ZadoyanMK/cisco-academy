<?php

use Faker\Generator as Faker;
$factory->define(App\Models\User::class, function (Faker $faker) {
    return [
        'name' => 'admin',
        'email' => 'zadoyan_mk@gmail.com',
        'password' => bcrypt("123"),
        'remember_token' => str_random(10),
    ];
});
