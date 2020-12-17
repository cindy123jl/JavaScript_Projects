function my_Dictionary(){//function name
    var kpop={//variable called kpop
        band:"Exo",//key and value
        members:7,// key and value no quotations needed as its a number
        debut:2012,//key and value
        genre:"pop"//key and value
    };
    delete kpop.band;//here we are deleting the key and value, key = kpop and value = band
    document.getElementById("Dictionary").innerHTML=kpop.band;//calling kpop.band but won't be displayed because we deleted it
}