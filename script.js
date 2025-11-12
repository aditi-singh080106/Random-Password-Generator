// RANDOM PASSWORD GENERATOR
function generatePassword(){
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const number = "0123456789";
    const symbol = "`~!@#$%^&*(\)_+=}]{[:;?/>.<,|\"";
    let allowedChars = "";
    let passcode = "";

    if(includeLowerCase.checked) allowedChars+=lowercase;
    if(includeUpperCase.checked) allowedChars+=upperCase;
    if(includeNumber.checked)    allowedChars+=number;
    if(includeSymbol.checked)    allowedChars+=symbol;
    console.log(allowedChars);
    console.log(passwordLength.value);
    
    if(passwordLength.value <= 0 ){
        return `Password length must be 1 or more..!`;
    }
    else if(allowedChars===0){
        return `Atleat 1 set of charactes needs to be selected.!`;
    }
    else {
        for(let i = 0 ; i < passwordLength.value ; i++ ){
            const randomIDX = Math.floor(Math.random()*allowedChars.length);
            passcode += allowedChars[randomIDX];
        }
    }
    console.log(passcode);

    const result = document.getElementById("password");
    result.textContent=`Generated password is : ${passcode}`;
}

let passwordLength = document.getElementById("length");
const includeLowerCase = document.getElementById("lowercase");
const includeUpperCase = document.getElementById("uppercase");
const includeSymbol = document.getElementById("symbol");
const includeNumber = document.getElementById("number");



// const password = generatePAssword(passwordLength,includeLowerCase,includeSymbol,includeNumber,includeUpperCase)
// console.log(`Generated Password : ${password}`);