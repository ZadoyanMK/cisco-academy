@extends('layout.app')

@section('content')
@include('components.carusel')
<div class="container marketing">
  @foreach ($posts as $post)
  <div class="row featurette">
  @if ($post->id % 2 == 0)
  <div class="col-md-7 order-md-2">
  @else
  <div class="col-md-7">
  @endif
  
    
    <h2 class="featurette-heading">{{$post->name}}</h2>
      <p class="lead">{{$post->description}}</p>
    </div>
    @if ($post->id % 2 == 0)
    <div class="col-md-5 order-md-1">
        @else
        <div class="col-md-5">
  @endif
    
      <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
    </div>
  </div>

  <hr class="featurette-divider">
  @endforeach
</div>
<div class="pagination-block">
{{ $posts->links() }}
</div>
  @endsection