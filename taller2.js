//Punto 1
function findMax (lista){
    let N= lista[0]

    for (let i = 0; i < lista.length; i++) {
        if (lista[i]>N) {
            N=lista[i]
        } 
    }
    return N;
}

//Punto 2
function includes (lista,num){
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === num) {
            return true
        }
        
    }
    return false;
}

//Punto 3
function sum (lista){
    let a=0
    for (let i = 0; i < lista.length; i++) {
        a+=lista[i]
        
    }
    return a;
}

//Punto 4

function missingNumbers(lista) {
    min = findMin(lista)
    max = findMax(lista)
    let missing = []

    for (let index = min; index < max; index++) {
        numero = index
        if (!includes(lista, numero)) {
            missing.push(numero)
        }
    }
    return missing
}

function findMin(lista) {
    if (lista.lenght === 1) {
        return lista[0]
    }

    let menor = lista[0]

    for (let index = 1; index < lista.length; index++) {
        if (lista[index] < menor) {
            menor = lista[index]
        }
        
    }

    return menor
}




console.log(missingNumbers([7,2,4,6,3,9]))