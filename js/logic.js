// Use var, let or const
/*
var declara una variable de scope global o local para la función sin importar el ámbito de bloque. Permite hoisting.
let declara una variable de scope global, local para la función o de bloque. Es reasignable y no permite hoisting.
const declara una variable de scope global, local para la función o de bloque. No es reasignable, pero es mutable. No permite hoisting.*/
console.log("Ready");

let magicNumber = 0;

function click_Jugar()
{
    //confirm("Soy un botón que funciona");
    f_numeroMagico();
}

function f_numeroMagico()
{
    let userName = prompt("Please enter one number from 1 to 9");
    if(userName >= 1 && userName <=9)
    {
        magicNumber = (userName * 9)* 12345679;
        confirm("MAGIC: ("+ userName + " x "+ 9+") x "+ 12345679 + " = "+ magicNumber );
    }
    else
    {
        confirm("Should input one number between 1 to 9");
    }
}



