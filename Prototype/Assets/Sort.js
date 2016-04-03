#pragma strict
import System.Collections.Generic;
import UnityEngine.UI;

var graph : GameObject; 

var graphedList : List.<GameObject> = new List.<GameObject>();


function SortList(x : List.<Item_Review>)
{
      
    for (var i= 0 ; i <= 365; i++)
    {
        var list : List.<int> = new List.<int>();

        for (var y : Item_Review in x)
        {
            if(y.date == i)
            {
                list.Add(y.rating);
                
            }
        }
        var total : int =0 ;
        var avgRate : float;
        for (var z : int in list)
        {
            total += z;
        }
        if(list.Count-1 >0)
        {
            avgRate = total/ list.Count -1;
            var g : GameObject = Instantiate(graph, Vector3(i,avgRate,0), graph.transform.rotation);
            graphedList.Add(g);
        }
    }

}