//Punto 1
function desglosarString(word, tipo) {
    const vocales = ['a', 'e', 'i', 'o', 'u']

    if (tipo === "vocales") {
        return word.split('').filter(char => vocales.includes(char)).length
    } else if (tipo === "consonantes") {
        return word.split('').filter(char => !vocales.includes(char)).length
    } else {
        return 0
    }
}


//Punto 2
function twoSum(lista, meta) {
    indices = lista.map((num, index) => {
        complement = meta - num
        complementIndex = lista.findIndex((n, i) => n === complement && i !== index)
       return complementIndex !== -1 ? [index, complementIndex] : null
   })
   
   return indices.find(result => result !== null)
}


//Punto 3
const romanos = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}

function conversionRomana(romano) {
    caracteres = romano.split('')
    valores = caracteres.map(char => romanos[char])
    
    return valores.reduce((total, valor, index) => {
        return total + (valor < (valores[index + 1] || 0) ? -valor : valor)
    }, 0)
}
console.log(conversionRomana("MXMVII"))