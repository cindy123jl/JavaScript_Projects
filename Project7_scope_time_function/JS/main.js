var X=10;//global variable variable is assigned and runs the value throughout the function Add_numbers_1 and 2.
function Add_numbers_1(){//function is called Add_numbers_1()
    document.write(20+X+"<br>");//20+10 = 30 plus a break 
}
function Add_numbers_2(){//function called Add_numbers_2()
    document.write(100+X+"<br>");//10 added to 100
}
Add_numbers_1();//function
Add_numbers_2();//function

function Add_numbers_3(){//function Add_numbers_3
    var x=10;//variable is assigned within the fuction so it only works with function Add_numbers_3
    document.write(X+200+"<br>");//10+200 plus a break
}
function Add_numbers_4(){//function Add_numbers_4
    document.write(x+100);//we have no X value so we will not get anything returned
}
Add_numbers_3();//function
Add_numbers_4();//function

document.write("<br>");//break

function comparison_nums(){//function name comparison_nums
if(22<23)//an equality 22 is less than 23 under an if statement
document.getElementById("number").innerHTML="23 is larger";//when clicked out goes 23 is larger
    
}

function Time_Function(){//function called Time_Function
    var Time=new Date().getHours();//variable is called Time we use Date().getHours() method
    var Reply;//variable is called Reply
    if(Time<12==Time>0){//if time is less than 12 but greater than 0 return the reply 
        Reply="It is morning time!";//reply that is returned
    }
    else if(Time>12==Time<18){//if not the above statement, if time is greater than 12 but less than 18 return the Reply
         Reply="It is afternoon";//reply is returned if current statement is true
    }
    else{//anything else other than the two statements above
        Reply="It is evening!";//we return the reply
    }
    document.getElementById("Time_of_Day").innerHTML=Reply;//the final response is returned on the browser 
}

function Add_numbers_22(){//function
    var X=22;//variable is x and its value os 22
    console.log(15+X); //we can use console.log to debug our code
}
function Add_numbers_23(){//function
    console.log(X+112);//we can use console.log method to debug our code
}
Add_numbers_22();//function can be returned 
Add_numbers_23();//function can not be returned since we do not have a variable assigned for x

