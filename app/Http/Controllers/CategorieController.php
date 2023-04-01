<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product ; 
use App\Models\Categorie ; 


class CategorieController extends Controller
{
    function addCategorie(Request $req){
        $categorie= new Categorie ; 
 
        $categorie->nom=$req->input('nom');
        $categorie->description=$req->input('description');
        $categorie->save() ; 
         return $categorie;
     }
     public function getCategorie()
     {
        return Categorie::all();
 
     }
     function deleteCat($id){
        $result= Categorie ::where('id',$id)->delete() ; 
        if ($result){
            return ["result"=>"deleted"];
        }
        else {
            return ["result"=>"failed"];

        }
    }
}
