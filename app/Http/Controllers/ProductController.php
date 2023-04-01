<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product ; 
class ProductController extends Controller
{
    function addProduct(Request $req){
       $product= new Product ; 

       $product->nom=$req->input('nom');
       $product->price=$req->input('price');
       $product->categorie_id=$req->input('categorie_id');

       $product->save() ; 
        return $product;
    }
    public function getProduct()
    {
        $products = Product::join('categories', 'products.categorie_id', '=', 'categories.id')
                    ->select('products.*', 'categories.nom as categorie_nom')
                    ->get();

       return  $products;

    }
    function deletePrd($id){
        $result= Product ::where('id',$id)->delete() ; 
        if ($result){
            return ["result"=>"deleted"];
        }
        else {
            return ["result"=>"failed"];

        }
    }
}
