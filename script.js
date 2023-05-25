const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


/* grab ui elements and set initial values*/
let UIpassword1 = document.getElementById("password_1");
let UIpassword2 = document.getElementById("password_2");
let passwordCharacters = document.getElementById("password-lenght");
let hasNumbers = document.getElementById("remove-numbers");
let hasSymbols = document.getElementById("remove-symbols");

/* 
create a collection of letters, numbers and symbols in base of user's choice
@return a characters list {array}
*/
function composeCharacters() {
    
    // set initial array of letters
    let characters = letters;
    
    // update array
    if (hasNumbers.checked === false) {
        characters = characters.concat(numbers)
    }

    if (hasSymbols.checked === false) {
        characters = characters.concat(symbols)
    }

    return characters;
}


/*
create a string password
@return password {str}
*/
function createPassword() {

    // compose collection of characters to draw password
    let characters = composeCharacters();
    
    // create empty str and randomly populate
    let password = "";

    for ( let i = 0; i < passwordCharacters.value; i++ ) {

        let randNum = Math.floor(Math.random() * characters.length);

        password += characters[randNum];
    }
    
    return password;
}

/*
generate two password and update UI
*/
function generate() {
    
    let password1 = createPassword();
    let password2 = createPassword();

    // update UI
    UIpassword1.textContent = password1;
    UIpassword2.textContent = password2;

}
