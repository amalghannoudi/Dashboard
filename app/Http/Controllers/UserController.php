<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash ; 
class UserController extends Controller
{
    function addUser(Request $req ){
      $user= new User;
      $user->name= $req->input("name");
      $user->email= $req->input("email");
      $user->password= Hash::make ($req->input("password"));
        $user->save(); 
        return $user;
    }
    function login (Request $req){
      $user=User::where('email',$req->email)->first();
     if ( ! $user || !Hash::check($req->password,$user->password)){
      return ['error'=>'password or email incorrecte'];
     }
      return $user;
    }
    public function getUsers()
    {
       return User::all();

    }
    function deleteUser($id){
      $result= User ::where('id',$id)->delete() ; 
      if ($result){
          return ["result"=>"deleted"];
      }
      else {
          return ["result"=>"failed"];

      }
  }
  function getUser($id){
    return User::find($id);
}
public function updateUser(Request $request, $id)
{
    $User = User::find($id);
    $User->name = $request->input('name');
    $User->email = $request->input('email');
    $User->save();

    return response()->json([
        'success' => true,
        'message' => 'User updated successfully.'
    ]);
}
}
