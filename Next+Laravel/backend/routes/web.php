<?php

use Illuminate\Support\Facades\Route;

function frontend_url(string $path = ''): string
{
    $base = rtrim(env('FRONTEND_URL', 'http://localhost:3000'), '/');
    $path = ltrim($path, '/');

    return $path === '' ? $base : "{$base}/{$path}";
}

Route::redirect('/', frontend_url());
Route::redirect('/home', frontend_url('home'))->name('home');
Route::redirect('/about', frontend_url('about'))->name('about');
Route::redirect('/contact', frontend_url('contact'))->name('contact');
Route::redirect('/catalog', frontend_url('catalog'))->name('catalog');
Route::redirect('/login', frontend_url('login'))->name('login');
