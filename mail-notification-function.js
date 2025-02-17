function sendNotification(email){
    if(email.includes("@") === false){
        return "Invalid Email"
    }
    let newEmail = email.split("@")
    let userName = newEmail[0];
    let domainName = newEmail[1];
    let sendMessage = userName +  " sent you a email by " + domainName;
    return sendMessage;
}

let address = sendNotification("rubelhosen1310@gmail.com")
console.log(address);