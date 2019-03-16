<?php
Route::get('login', 'Auth\LoginController@showLoginForm')->name('login');
Route::post('login', 'Auth\LoginController@login');
Route::post('logout', 'Auth\LoginController@logout')->name('logout');
Route::get('/', 'MainController@index')->name('home');
Route::Resource('post', 'PostController')->except([
    //'index',
]);
//Route::get('admin', 'AdminController@index')->name('admin');

