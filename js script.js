//generate random password
function generate(){

    //set password length/complexity
    let complexity = document.getElementById("slider").value;
    //possible password values
    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+"


    let password = "";

    //create for loop to choose password characters
    for(car i = 0; I <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    //add password to textbox/display area
    document.getElementById("display").value = passowrd;

}