var rand = (function(limit){
    
    function randomNumber(){
        console.log(limit);
    }

    randomNumber.addNumber = function(x,y){
        return x+y;
    }

    return randomNumber;

})(10)