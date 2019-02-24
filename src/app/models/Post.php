<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $table = 'posts';
    
    protected $fillable = [
        'name', 'description', 'photo_hash_name','photo_type','photo_name'
    ];

    protected $hidden = [
        'id', 'user_id'
    ];

    protected $all = [
        'id',
        'name',
        'description',
        'photo_hash_name','photo_type','photo_name',
        'user_id'
    ];
}
