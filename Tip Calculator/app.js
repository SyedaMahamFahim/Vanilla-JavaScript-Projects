function mainFunction() {
    var userBill = document.getElementById("user_bill").value
    var goodExperience = document.getElementById("userexperience").value
    var noOfUsers = document.getElementById("no_of_users").value
    // alert(userBill)
    // output = document.getElementById("output").innerHTML = "Paragraph changed!";
    if (userBill === "" || noOfUsers === "") {
        alert("Please enter values");
        return;
      }
    else{
        var totalPriceDivide=userBill/noOfUsers;
        alert("The bill is divided into "+ totalPriceDivide +"rs among " +noOfUsers +" people" );
        return;
    }  
    
}

mainFunction()
