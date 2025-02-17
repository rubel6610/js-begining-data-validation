function calculateTax(income, expense){
    if(typeof income !== "number" || income < 0 || typeof expense !== "number" || expense < 0 || expense > income){
        return "Invalid Input";
    }else{
        let remainingbalance = income - expense;
        let tax = remainingbalance / 100 * 20; 
        return tax;
    }

   
}

let input = calculateTax(3000, 20000);
console.log(input);