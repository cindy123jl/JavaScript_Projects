function random(){//function name random 
    document.write(Math.random());//print out a random number
}

function negation_operator(){//name of function 
    var x=10;//variable x is assigned a value of 10
    document.getElementById("Math").innerHTML=-x;//returns the element who has id attribute
}

function addition_function(){//function name 
    var addition=3+2;//variable name addition that operates a addition problem
    document.getElementById("ADD").innerHTML="3+2= "+addition;//displays 3+2 snd returns the element
}

function subtraction_function(){//function name
    var subtraction=3-2;//variable name subtraction that operates a subtraction problem
    document.getElementById("SUB").innerHTML="2-2= "+subtraction;//displays 3-2 and returns the element
}

function multiplication(){//function name
    var multiply=3*2;//variable name multiply that operates a multiplication problem
    document.getElementById("MULTIPLY").innerHTML="3*2= "+multiply;//displays 3*2 and returns the element
}

function modulus_operator(){//function name 
    var module=3%2;//variable name module who operates modulus
    document.getElementById("MODULE").innerHTML="3%2= "+module;//displays3%2 and returns the element
}

function increment(){//function called increment that means to add 1 to the given value
    var x=3;//variable x is assigned a value of 3
    x++;//increment by one
    document.getElementById("INCREMENT").innerHTML="Increment 3 "+x; //increment 3 is displayed and the element is returned
}

function decrement(){//function called decrement
    var y=3; //variable y is assigned 3
    y--;//decrement by one
    document.getElementById("DECREMENT").innerHTML="Decrement 3"+y;//decrement 3 is displayed and the element is returned
}