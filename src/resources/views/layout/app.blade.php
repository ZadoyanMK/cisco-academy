<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="Miroslav Zadoyan, zadoyan.miroslav@gmail.com">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>ZNTU Cisco Academy</title>
    <!-- Bootstrap core CSS -->
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
    <link href="https://netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet">
  </head>
  <body>
@include('layout.header')

<main role="main">
@yield('content')
</main>
@include('layout.footer')
<a href="javascript:" id="return-to-top"><i class="icon-chevron-up"></i></a>
<form class="form-inline mt-2 mt-md-0">
    <button id="add-new-post" class="btn btn-outline-success my-2 my-sm-0" type="submit">
        <i class="plus-icon"></i></button>
</form>

<script src="{{asset('js/app.js')}}"></script>
<script src="{{asset('js/scripts.js')}}"></script>
  </body>
</html>