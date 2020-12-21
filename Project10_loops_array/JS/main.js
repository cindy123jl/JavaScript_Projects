//while loop
function count_to_ten(){//name of function
    var digit="";//our variable digit
    var x=1;//our variable x assigned to 1
    while(x<11){//while loop, do loop until x is no longer less than 11
        digit+="<br>"+x;//digit concatenates our values
        x++;//increment by 1 each time we go through the loop
    }
    document.getElementById("counting_to_ten").innerHTML=digit;//we are displaying our values on the browser
}

var bands=["BTS","EXO","Twice","Blackpink","Apink"];//variable is bands, array 0 through 4
var content="";//variable content
var y;//variable y

function for_loop(){//start of our function
    for(y=0;y<bands.length;y++){//our for loop starts
        content += bands[y]+"<br>";//content concatenates all our values but breaks them up
    }
    document.getElementById("bands_list").innerHTML=content;//displays through the html 
}
function array_fruit(){
var fruits = ["Strawberry", "Kiwi", "Apple","Mango"];//our array is inbetween our[]
document.getElementById("arrayfruit").innerHTML=fruits.length;//the length of fruits is 
}

function let_keyboard(){
let i = 23;
for (let i = 0; i<23;i++){
    
}
document.getElementById("let").innerHTML = i;
}
