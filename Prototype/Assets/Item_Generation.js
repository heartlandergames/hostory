#pragma strict
import System.Collections.Generic;




var itemsList :  List.<Item_Review> = new List.<Item_Review>();

var numberToGenerate : int;


function Start () {
    
}

function Update () {
    Generate();
}

function Generate()
{
    if(itemsList.Count < numberToGenerate)
    {
        var x : Item_Review = new Item_Review();
        itemsList.Add(x);
    }
}