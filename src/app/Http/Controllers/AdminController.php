<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use App\Http\Requests\GetRequest;
use App\Http\Requests\PostRequest;
use App\Http\Requests\PatchRequest;
use App\Http\Requests\DeleteRequest;

class AdminController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $query = Post::orderBy('id', 'asc')
            ->paginate(20);
        $data = [
            "posts" => $query,
        ];
        return view('pages.admin')->with($data);
    }

    /**
     * @param HotelPOSTRequest $request
     * @return HotelResource
     */
    public function store(PostRequest $request)
    {
        $data = $request->all();
        $data['image_checksum'] = (string)$data['image_checksum'];
        $data['image_path'] = (string)$data['image_path'];
        $data['image_name'] = (string)$data['image_name'];
        $data['user_id'] = Auth::user()->id;

        $hotel = Hotel::updateOrCreate($data);
        $hotel->save();

        return new HotelResource($hotel);
    }

    /**
     * @param GetRequest $request
     * @param Post $hotel
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function show(GetRequest $request, Post $post)
    {
        // echo $post; exit(0);

        return view('pages.post')->with(["post" => $post]);
    }

    /**
     * @param HotelPUTPATCHRequest $request
     * @param Hotel $hotel
     * @return HotelResource
     */
    public function update(PatchRequest $request, Post $post)
    {
        $hotel->update($request->all());
        $hotel->save();
        return new HotelResource($hotel);
    }

    /**
     * @param HotelDELETERequest $request
     * @param Hotel $hotel
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(DeleteRequest $request, Post $post)
    {
        $hotel->delete();
        return response()->json([], 202);
    }
}
