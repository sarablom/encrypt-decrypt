// const letters1 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];
// const letters2 = ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// let message = "HELLOWORLD";
// let output = "";

// //Initierar en loop och använder strMessage-loop som räknare
// for (let i=0; i < message.length; i++) {
//     //Plocka upp varje bokstav vid strMessage Position [i]
//     let letter = message.charAt(i);
//     //Vilken array ingår den specifika bokstaven i
//     if (letters1.includes(letter)) {
//         let index = letters1.indexOf(letter);
//         //Byt ut bokstav med motsvarande krypterad variant
//         output += letters2[index];
//     } else {
//         let index = letters2.indexOf(letter);
//         //Byt ut bokstav med motsvarande krypterad variant
//         output += letters1[index];
//     }
// }

// console.log(output);

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ 0123456789";
const solidKey = "1QAZ2WSX3EDC4RFV5TGB 6YHN7UJM8IK9OL0PÖÅÄ";

function encryptWithKey () {
    let message = document.getElementById("message").value;
    let output = "";

    for (let i=0; i < message.length; i++) {
        let letter = message.charAt(i);
        output += solidKey.charAt(alphabet.indexOf(letter))
    }
    document.getElementById("output").value = output;
}

function decryptWithKey () {
    let message = document.getElementById("message").value;
    let output = "";

    for (let i=0; i < message.length; i++) {
        let letter = message.charAt(i);
        output += alphabet.charAt(solidKey.indexOf(letter))
    }
    document.getElementById("output").value = output;
}

function encryptWithIndivdualKey () {
    let message = document.getElementById("message").value;
    let output = "";
    let compositeKey = document.getElementById("key").value;

    for(let i=0; i < solidKey.length; i++) {
        let letter = solidKey.charAt(i);
        if (compositeKey.indexOf(letter) === -1) {
            compositeKey += letter;
        }
    }

    for (let i=0; i < message.length; i++) {
        let letter = message.charAt(i);
        output += compositeKey.charAt(solidKey.indexOf(letter))
    }
    document.getElementById("output").value = output;
}

function decryptWithIndivdualKey() {
    let message = document.getElementById("message").value;
    let output = "";
    let compositeKey = document.getElementById("key").value;
    
    for (let i=0; i < solidKey.length; i++) {
        let letter = solidKey.charAt(i);

        if (compositeKey.indexOf(letter) === -1) {
            compositeKey += letter;
        }
    }

    for (let i=0; i < message.length; i++) {
        let letter = message.charAt(i);
        output += solidKey.charAt(compositeKey.indexOf(letter));
    }

    document.getElementById("output").value = output;
}

