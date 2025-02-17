function stringContainDigit(names){
    if(typeof names !== "string"){
        return "Invalid Input";
    }
    let containDigit=false;
    for(i=0; i<names.length; i++){
        let name = names[i]
        if(isNaN(name) === false){
            containDigit = true;
            break;
        }
    }
    return containDigit;
}

let result = stringContainDigit (6610);
console.log(result);