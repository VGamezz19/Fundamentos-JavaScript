//Class 1

//Comilla invertida ``
console.log(`==================== Class 1 ====================`)

let base = 5
let height = 7
const  triangleArea = (base, height) => base * height / 2
console.log(`Area de un triangulo de base ${base} y altura ${height} = ${triangleArea(base,height)}`)

console.log(`==================== Class 2 ====================`)

const   starWars7 = 'StarWars Peli Reshulona',
        pgStarWars7 = 13,
        nameVgamez ='Victor',
        ageVgamez = 21,
        nameSanti = 'Santi',
        ageSanti = 12,
        canWatchStarWars7 = (name, age) => (age) >= pgStarWars7 ? alert(`${name}, puede pasar a ver la peli`) : alert(`${name}, no puede ver la peli`)
        canWatchStarWars7(nameVgamez,ageVgamez)
        canWatchStarWars7(nameSanti,ageSanti)

console.log(`==================== Class 3 ====================`)
// 1- Si la palabra termina en "ar", se le quitan esos los dos caracteres
// 2- Si la palabra inicia con Z, se le añade "pe" al final
// 3- Si tiene 10 o mas caracteres, hay que ponerle un guion en la mitad
// 4- Si es un palindromo, ninguna regla anterior cuenta y se devuelve intercalando mayusculas y minusculas
const platzom = (str) => {
    let translation = str
    //1
    translation.toLowerCase().endsWith('ar') ? translation = str.slice(0,-2) : translation
    //2
    translation.toLowerCase().startsWith('z') ? translation += 'pe' : translation
    //3
    const length = translation.length,
          half = Math.round(translation.length / 2);
    length >=  10 ? translation = `${translation.slice(0,half)} - ${translation.slice(half)}`: translation
    //4
    const reverse = str => str.split('').reverse().join(''),
          minMay  = str => str.split('').map(c => str.indexOf(c) % 2 == 0 ? c.toUpperCase() : c.toLowerCase()).join('')
    
    
    translation =  str === reverse(translation) ? minMay(str) : translation

    return translation
}

console.log(platzom('zarpar'))
console.log(platzom('abecedario'))
console.log(platzom('sometemos'))

console.log(`==================== Class 4 ====================`)

const nombre = 'Sacha'
const dias = [
  'lunes',
  'martes',
  'miércoles',
  'jueves',
  'viernes',
  'sábado',
  'domingo'
]
function correr() {
  const min = 5
  const max = 15
  return Math.round(Math.random() * (max - min)) + min
}
let totalKms = 0
const length = dias.length
for (let i = 0; i < length; i++) {
  const kms = correr()
  totalKms += kms
  console.log(`El día ${dias[i]} ${nombre} corrió ${kms}kms`)
}
const promedioKms = totalKms / length
console.log(`En promedio, ${nombre} corrió ${promedioKms.toFixed(2)}kms`)

console.log(`==================== Class 5 ====================`)