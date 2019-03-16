@extends('layout.app')

@section('content')
<div class="pt-5">
    
</div>

<div class="pt-3">
    @foreach ($posts as $post)
        <div class="row pt-1 pl-3 w-100">
            {{$post->name}}
        </div>
    @endforeach
</div>
<div class="pagination-admin-block">
    {{ $posts->links() }}
</div>
@endsection