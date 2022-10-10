/*Write a JavaScript function that reverses a number. For example, if x = 32443 then the output should be 34423. Save your JavaScript file and reload the page. Make sure you see the correct output. If not, investigate and fix.*/ // SOLUCION FACIL CON REVERSE
let ar1 = 295231

function reverser(arr) {
    let ar1Reverse = [];
    while (arr.length > 0) {
        ar1Reverse.push(arr.pop())
    }
    console.log(ar1Reverse)
}
reverser(ar1)

/*Exercise 2: Write a JavaScript function that returns a string in alphabetical order. For example, if x = 'webmaster' then the output should be 'abeemrstw'. Punctuation and numbers aren't passed in the string. Save your JavaScript file and reload the page. Make sure you see the correct output. If not, investigate and fix.*/

let string1 = "A b e c e d a r i o"

function stringOrderAlphabetic(string) {
    let stringSeparado = string.split(" ")
    let stringOrdenado = stringSeparado.sort()
    stringOrdenado.join("")
}

stringOrderAlphabetic(string1)


/*Exercise 3: Write a JavaScript function that converts the first letter of every word to uppercase. For example, if x = "prince of persia" then the output should be "Prince Of Persia".Save your JavaScript file and reload the page. Make sure you see the correct output. If not, investigate and fix.*/
//Declaracion de variables

let frase3 = "prince of persia"
let uppercase = frase3
.split(" ")
.map(function (mayus){
    return mayus.charAt(0).toUpperCase() + mayus.slice(1);
})
.join(" ");
console.log(`after: ${uppercase}`)

/* ESCRIBE UNA FUNCION QUE ENCUENTRE LA PALABRA MAS LARGA EN UNA FRASE.*/

let frase = "Web Development Tutorial";
// analizador=["Web", "Development", "Tutorial"]
//              0           1             2
function palabraMasLarga(frase) {
    let analizador = frase.split(" ")
    let palabraMasLarga = "";
    for (let palabra of analizador) {
        if (palabra.length > palabraMasLarga.length) {
            palabraMasLarga = palabra
        }
    }
    console.log(palabraMasLarga)
}
palabraMasLarga(frase)
