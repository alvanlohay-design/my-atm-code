let pin=prompt("Enter your pin");
while(pin !="1234"){
    alert("Incorrect pin");
    pin=prompt("Try again")
}
alert("Welcome to the bank Alvan");
let balance=5000;
alert("Your balance is " +balance);
let withdrawal=Number(prompt("How much do you want to withdraw?"));
if (withdrawal<=balance&&withdrawal>0){
    balance=balance-withdrawal;
    alert("Withdrawal successful");
    alert("You withdrew "+withdrawal);
    alert("Your remaning balance is " +balance);
}
else if(withdrawal>balance||withdrawal<0){
    alert("Write the correct amount");
    withdrawal=Number(prompt("How much do you want to withdraw?"));
    balance=balance-withdrawal;
    alert("Withdrawal successful");
    alert("You withdrew "+withdrawal);
    alert("Your remaning balance is " +balance);
}
else{
    alert("Insufficient money or invalid amount");
}
alert("Thank you for using our bank Alvan.");
