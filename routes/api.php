<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CategorieController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route ::post('addUser',[UserController::class,'addUser']);
Route ::post('login',[UserController::class,'login']);
Route ::post('addProduct',[ProductController::class,'addProduct']);
Route ::post('addCategorie',[CategorieController::class,'addCategorie']);
Route ::get('getProduct',[ProductController::class,'getProduct']);
Route ::get('getUsers',[UserController::class,'getUsers']);
Route ::get('getCategorie',[CategorieController::class,'getCategorie']);
Route ::delete('deleteCat/{id}',[CategorieController::class,'deleteCat']);
Route ::delete('deleteUser/{id}',[UserController::class,'deleteUser']);
Route ::delete('deletePrd/{id}',[ProductController::class,'deletePrd']);
Route ::get('getPrd/{id}',[ProductController::class,'getPrd']);
Route ::get('getCat/{id}',[CategorieController::class,'getCat']);
Route ::get('getUser/{id}',[UserController::class,'getUser']);
Route ::put('updateCat/{id}',[CategorieController::class,'updateCat']);
Route ::put('updatePrd/{id}',[ProductController::class,'updatePrd']);
Route ::put('updateUser/{id}',[UserController::class,'updateUser']);
