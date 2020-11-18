function divide(x,y){
    return x/y
}

var x = 8
var y 

y = parseInt (prompt ("How many people are there?"));
 
if (y <= 1){
    console.log(`Go gather some friends`)
}
else if (y > 8 ){
    console.log(`Do everyone a favor and order another pizza`)
}
else if (y => 2){
    console.log(`Each person gets ${divide(x,y)} slices of pizza.`);
}
