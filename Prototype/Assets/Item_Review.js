#pragma strict


public class Item_Review
{

    var nam : String;

    var id : float;

    var rating : int;

    var date : int;

    function Item_Review()
    {
        nam = "Customer Name";
        id = 0;
        rating = Random.Range(0,5);
        date = Random.Range(0,365);
        
    }

    }