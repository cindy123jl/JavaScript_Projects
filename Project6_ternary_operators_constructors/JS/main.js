function License_Function(){//function to call code
    var Age, can_drive;//variable is Age and can_drive
    Age = document.getElementById("Age").value;//retrieves the input age
    can_drive = (Age < 16)?"You are too young":"You are old enough";//compares the Age with 16, if under 16 too young if 16 and older old enough
    document.getElementById("License").innerHTML=can_drive+ " to get a license.";//retrieves the outcome sentence from above and combines with the 
                                                                                // " to get a license"
}

function Kpop(debut, genre, members, company){//function Kpop() is our object constructor
    this.Kpop_debut=debut;//is the object
    this.Kpop_genre=genre;//is the object
    this.Kpop_members=members;//is the object
    this.Kpop_company=company;//is the object
}

var EXO= new Kpop(2011,"pop",9,"SM");//instance of a class
var Blackpink= new Kpop(2016,"pop",4,"YG");//instance of a class
var Twice= new Kpop(2015,"pop",9,"JYP");//instance of a class
function myFunction(){//function that is called
    document.getElementById("keywords_and_constructors").innerHTML=//id keywords_and_constructors
    "Blackpink debuted in "+Blackpink.Kpop_debut+". "+Blackpink.Kpop_company+//js retrieves the objects and displays on browser throught html
    " is the company they are under. They have "+Blackpink.Kpop_members+ " members.";//displayed on browser
}

function count_Function(){//function is called
    document.getElementById("Counting").innerHTML=Count();//it is located for html
    function Count(){//function 
        var starting_point=7;//variable is called starting_point which is equal to 7
        function plus_one(){starting_point += 1;}//7 is added to 1 
        plus_one();//new value
        return starting_point;//returns value
    }
}