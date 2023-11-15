let number_on = true
let symbols_on = true
const characters ={ 
    all: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"],
    no_symbols: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    no_numbers: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"],
    only_letters: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
}
let use_characters = characters.all
console.log(characters.only_letters)
console.log(randELfromArray(characters.all))
function randELfromArray(array){return array[Math.floor(Math.random()*array.length)]}
function numberson() {
    if (number_on){
        number_on = false
        document.getElementById("Generate1").innerText = "Numbers Off"
    } else {
        number_on = true
        document.getElementById("Generate1").innerText = "Numbers On"
    }
    define_characters()
}
function symbolson() {
    if (symbols_on){
        symbols_on = false
        document.getElementById("Generate2").innerText = "Symbols Off"
    } else {
        symbols_on = true
        document.getElementById("Generate2").innerText = "Symbols On"
    }
    define_characters()
}
function copy(whereis) {navigator.clipboard.writeText(document.getElementById(whereis).innerText);

}
function define_characters() {
    if (number_on && symbols_on) {
        use_characters = characters.all
    }
    else if (number_on && !symbols_on) {
        use_characters = characters.no_symbols
    }
    else if (!number_on && symbols_on) {
        use_characters = characters.no_numbers
    }
    else if (!number_on && !symbols_on) {
        use_characters = characters.only_letters
    }
    
}
//console.log(typeof(toString(i)))
  //  console.log(i)}
function generate() {
    console.log("hello world")
    let passwordLength = document.getElementById("password-number").value
    console.log(passwordLength)
    for (let i = 1; i <= 2;i++) {
        let password = ""
        for (let i = 0; i < passwordLength; i++) {password+=randELfromArray(use_characters)}
        console.log(password)
        console.log(typeof("password"+i))
        document.getElementById("password"+i).innerText =password
    }
}