function testScore(input){
    if(typeof input !== "object" ||
        typeof input.name !== "string" ||
        typeof input.score !== "number" ||
        typeof input.OptionalNum !== "number"
    ){
        return "invaild Input"
    }

    let totalScore = input.score + input.OptionalNum;
    
    if(input.isFamily === true){
        totalScore+=20;
    }
  

    if(totalScore >= 80){
        return "You can admit" + " " + input.name;
    }else{
        return "You can't admit"+ " " + input.name;
    }
}

let result = testScore({
    name: "Rubel",
    score:45,
    OptionalNum: 20,
    isFamily:true,

})
console.log(result);