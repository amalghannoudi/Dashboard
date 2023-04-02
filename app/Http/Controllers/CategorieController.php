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
    function getCat($id){
        return Categorie::find($id);
    }
    public function updateCat(Request $request, $id)
{
    $category = Categorie::find($id);
    $category->nom = $request->input('nom');
    $category->description = $request->input('description');
    $category->save();

    return response()->json([
        'success' => true,
        'message' => 'Category updated successfully.'
    ]);
}

}
