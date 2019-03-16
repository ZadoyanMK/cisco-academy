<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
class MainController extends Controller
{
    function index(){
        $query = Post::orderBy('id', 'asc')
            ->paginate(5);
        $data = [
            "posts" => $query,
        ];

        return view('pages.main')->with($data);
    }
}
