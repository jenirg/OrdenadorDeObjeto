var resultado = document.getElementById("Resultado");
var VarKeys = document.getElementById("VarKeys");
var VarValues = document.getElementById("VarValues"); 

var SonidoAnimales = {
    Perro: "Ladrillo",
    Gato: "Maullido",
    Lobo: "Aullido",
    Tigre: "Ruge"
};

console.log(Object.values(SonidoAnimales));
console.log(Object.keys(SonidoAnimales));

function Ordenar() {
    VarAux = Object.keys(SonidoAnimales) .sort().reduce(function(Obj, key) { 
        Obj[key] = SonidoAnimales[key]; return Obj; }, {});
    const  VarKeys = JSON.stringify(Object.keys(VarAux));
    const  VarValues = JSON.stringify(Object.values(VarAux));
    return resultado.innerHTML = `[${VarKeys}], [${VarValues}]`;

}



