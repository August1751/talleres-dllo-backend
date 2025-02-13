//Punto 1
function convertidorTemp(c){
    return c*(9/5)+32;
}

//Punto 2
function resolvedor(a,b,c,pos){
    if (pos==1){
        return (-b+Math.sqrt(b**2-4*a*c))/(2*a);
    }else{
        return (-b-Math.sqrt(b**2-4*a*c))/(2*a);
    }
}

//Punto 3
function mejorParidad(num){
    return num % 2 == 0
}

//Punto 4
function peorParidad(num){
    const numeros = [0,1,2,3,4,5,6,7,8,9,10]
    const salidas = [
        "par",
        "impar",
        "par",
        "impar",
        "par",
        "impar",
        "par",
        "impar",
        "par",
        "impar",
        "par"
    ]

    let encontrado = 0
    for (let index = 0; index < numeros.length; index++) {
       if (numeros[index] === num) {
         encontrado = 1
       }
    }

    if (encontrado === 1) {
        for (let index = 0; index < numeros.length; index++) {
            if (numeros[index] === num) {
                return salidas[index]
            } 
        }
    }
}
console.log(convertidorTemp(5))
console.log(resolvedor(1,5,4,1))
console.log(mejorParidad(2))
console.log(peorParidad(1))