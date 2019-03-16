@extends('layout.app')

@section('content')
<div class="pt-5">
    Post page
</div>

<div class="pt-3">
    {{$post->name}}
</div>

@endsection