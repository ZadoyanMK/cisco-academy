<?php

use Faker\Generator as Faker;

$factory->define(App\Models\Post::class, function (Faker $faker) {
    $userId = \Illuminate\Support\Facades\DB::table("users")->pluck("id");
    return [
        'name' => $faker->unique()->name,
        'description' => $faker->text(),
        'user_id' => $userId->random(),
    ];
});
