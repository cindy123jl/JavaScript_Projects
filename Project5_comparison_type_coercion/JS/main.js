
function not_Function(){//function called into html
    document.getElementById("Not").innerHTML=!(20>10);//id is called, the ! operator checks if the following is true or false
}

x=11;//assigning x a value of 11
y=11;//assigning y a value of 11
document.write(x==y);//comparison is made

document.write("<br>");//line break to create a line brake on the html

document.write("10"+6);//returns 106 10 and 6 are concenated

document.write("<br>");//line break

document.write(typeof "hello");//type of data is string returns string

document.write("<br>");//line break

document.write(8>2 && 22>2);//true is returned because both equalities are true

document.write("<br>");//line break

document.write(2>8 && 7>2);//false is returned because both equalities have to be true for it to be returned as true

document.write("<br>");//line break

document.write(5>10 || 10>4);//true is returned because only one of the equalities need to be true

document.write("<br>");//line break

document.write(5>10 || 16>22);//returns false because both equalities are false

document.write("<br>");//line break
