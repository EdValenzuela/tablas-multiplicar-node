//Requires
const fileSystem = require('fs');//Propio de node
const colors = require('colors');
const { rejects } = require('assert');
//const fs = require('express');// no viene en la doc de node, se instala
//const fs = require('./fs');//de nuestro proyecto

let listarTabla = (base, limite=10) =>{

    console.log("========================".green);
    console.log(`tabla de ${base}`.green);
    console.log("========================".green);
    for(let i = 1; i<=limite;i++){
        console.log(`${base} * ${i} = ${base * i}\n`);
    }
}

let crearArchivo = (base, limite=10) =>{
    return new Promise ( (resolve, rejects)=>{

        if(!Number(base)){
            rejects(`El valor introducido ${base} no es un número`);
            return;
        }

        let data = '';

        for(let i =1; i<=limite; i++){
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fileSystem.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {
            if (err) 
                rejects(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });
    })
}

//Exporta la funcion
module.exports = {
    listarTabla,
    crearArchivo
}


