function example_concat(){//function
    var str1 = "Hiya, ";//first portion of string
    var str2 = "How are you!";//second portion of string
    var res = str1.concat(str2);//concanate both strings into 1 sentence

    document.getElementById("example1").innerHTML=res;//display the string
}

function slice_method(){//function
    var sentence="Get in we are going shopping!";//variable is assigned sentence with the given value
    var section=sentence.slice(13,19);//we are narrowing the word going
    document.getElementById("slice").innerHTML=section;//we display the narrowed word
}

function string_method(){//function
    var x=2494392;//variable is called x and assigned the value
    document.getElementById("numbers_to_string").innerHTML=x.toString();//we are displaying our number as a string
}

function precision_method(){//function
    var x=12344.6739;//assigned variable x a value 
    document.getElementById("precision").innerHTML=x.toPrecision(7);//we are going to only round up to 7 digits
}