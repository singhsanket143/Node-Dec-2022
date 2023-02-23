console.log("first is "+a());



var a = function(){
    console.log("a is called for first time");
    
    
}

function a(){
     console.log("a is called for second time");
 
}


console.log("second is "+a());