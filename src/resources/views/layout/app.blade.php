<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <meta name="generator" content="Jekyll v3.8.5">
    <title>Carousel Template · Bootstrap</title>
    <link rel="canonical" href="https://getbootstrap.com/docs/4.3/examples/album/">
    <link rel="stylesheet" href="{{asset('css/app.css')}}"> 
  </head>
  <body>

@include('layout.header')
<main role="main">

  @yield('content')
@include('layout.footer')
  
</main>
<script type="text/javascript" src="{{asset('js/app.js')}}"></script>
</html>