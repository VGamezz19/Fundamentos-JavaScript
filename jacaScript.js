console.log(`==================== Bases del Lenguaje ====================`)
console.log(`==================== Class 1 ====================`)

//Comilla invertida ``

console.log(`==================== Class 2 ====================`)
let base = 5
let height = 7
const  triangleArea = (base, height) => base * height / 2
console.log(`Area de un triangulo de base ${base} y altura ${height} = ${triangleArea(base,height)}`)

console.log(`==================== Class 3 ====================`)
const   starWars7 = 'StarWars Peli Reshulona',
        pgStarWars7 = 13,
        nameVgamez ='Victor',
        ageVgamez = 21,
        nameSanti = 'Santi',
        ageSanti = 12,
        canWatchStarWars7 = (name, age) => (age) >= pgStarWars7 ? alert(`${name}, puede pasar a ver la peli`) : alert(`${name}, no puede ver la peli`)
canWatchStarWars7(nameVgamez,ageVgamez)
canWatchStarWars7(nameSanti,ageSanti)

console.log(`==================== Class 4 ====================`)
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

console.log(`==================== Class 5 ====================`)
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

console.log(`==================== Class 6 ====================`)
let vidaGoku = 100;
let vidaSuperman = 100;

const min_power = 5;
const max_power = 12;

const ambosSiguenVivos = () => vidaGoku > 0 && vidaSuperman > 0;
const calcularGolpe = () => Math.round(Math.random() * (max_power - min_power) + min_power);
const gokuSigueVivo = () => vidaGoku > 0
let round = 0;

while(ambosSiguenVivos()) //Mientras la funcion devuelva TRUE
{
  round++
  console.log(`Round: ${round}`)
  const golpeGoku = calcularGolpe();
  const golpeSuperman = calcularGolpe();
  if (golpeGoku > golpeSuperman) {
    console.log(`Goku ataca a Superman con un golpe de ${golpeGoku}`);
    vidaSuperman -= golpeGoku;
    console.log(`Superman queda en ${vidaSuperman} puntos de vida`);
  } else {
    console.log(`Superman ataca a Goku con un golpe de ${golpeSuperman}`);
    vidaGoku -= golpeSuperman;
    console.log(`Goku queda en ${vidaGoku} puntos de vida`);
  }
}
if(gokuSigueVivo()) {
  console.log(`Goku gano la pelea. su vida es de: ${vidaGoku}`);
} else {
  console.log(`Superman gano la pelea. su vida es de: ${vidaSuperman}`);
}

console.log(`==================== Class 7 ====================`)
//Calcular cuanto tiempo paso desde tu nacimiento
const dias =
[ "domingo",
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado"]
const nacimiento = new Date(1996, 07, 15);
const hoy = new Date();
const tiempomil = hoy - nacimiento
const tiemposeg = tiempomil /1000
const tiempomin = tiemposeg / 60
const tiempohor = tiempomin / 60
const tiempodias = tiempohor / 24
const tiempoyear = tiempodias / 365
const proximo = new Date(hoy.getFullYear(), nacimiento.getMonth(), nacimiento.getDate())
console.log(proximo.getDay())

console.log(dias[proximo.getDay()])

console.log(`==================== Objetos en JavaScript ====================`)
console.log(`==================== Class 8 ====================`)
const p1 = {x: 0, y: 4},
      p2 = {x: 3, y: 0},
      distancia = (p1,p2) => {
        const x = p1.x - p2.x,
              y = p1.y - p2.y;
        return Math.sqrt(x * x + y * y)
      };
console.log(distancia(p1,p2))

console.log(`==================== Class 9 ====================`)
const p1 = {
        x: 0,
        y: 4,
        moveX: x => this.x = this.x + x,
        moveY: y => this.y = this.y + y
      }
      p2 = {
        x: 3, 
        y: 0,
        moveX (x) { this.x = this.x + x},
        moveY(y) {this.y = this.y + y}
      }
      distancia = (p1,p2) => {
        const x = p1.x - p2.x,
              y = p1.y - p2.y;
        return Math.sqrt(x * x + y * y).toFixed(2)
      };
console.log(distancia(p1,p2))

console.log(`==================== Class 10 ====================`)
  function Punto (x,y){
    this.x = x
    this.y = y  
  }
  Punto.prototype.moveX = function moveX(x) {
    this.x +=  x
  }
  Punto.prototype.distancia = function distancia (p) {
    const x = this.x - p.x,
          y = this.y - p.y;
    return Math.sqrt(x * x + y * y).toFixed(2)
  }
  Punto.prototype.moveY = function moveY(y){
    this.y += y
  }

const p1 = new Punto(0,4),
      p2 = new Punto(3,0)

console.log(p1.distancia(p2))
p1.moveX(10)
console.log(p1.distancia(p2))
p2.moveY(-4)
console.log(p1.distancia(p2))

console.log(`==================== Class 11 ====================`)
const Punto = {
  init: function (x, y) {
    this.x = x
    this.y = y
  },
  moveX = function moveX (x){
    this.x +=x
  },
  moveY = function moveX (y){
    this.y +=y
  },
  distancia = function distancia (p) {
    const x = this.x - p.x,
          y = this.y - p.y;
    return Math.sqrt(x * x + y * y).toFixed(2)
  }
}

const p1 = Object.create(Punto)
p1.init(0,4)g
p1.init(3,0)

console.log(p1.distancia(p2))
p1.moveX(10)
console.log(p1.distancia(p2))
p2.moveY(-4)
console.log(p1.distancia(p2))

console.log(`==================== Class 12 ====================`)
class Punto {
  constructor(x,y){
    this.x =x
    this.y = y
  }
  moveX(x) {
    this.x += x
  }
  moveY(y) {
    this.y += y
  }
  distancia (p) {
    const x = this.x - p.x,
          y = this.y - p.y;
    return Math.sqrt(x * x + y * y).toFixed(2)
  }
}

const p1 = new Punto(0,4),
      p2 = new Punto(3,0)

console.log(p1.distancia(p2))
p1.moveX(10)
console.log(p1.distancia(p2))
p2.moveY(-4)
console.log(p1.distancia(p2))

console.log(`==================== Class 13 ====================`)
var nombre = 'Victor'
//Todo lo que definamos "fuera" se encontraran en el Scope GLOBAL,
//Se podra acceder a todos los demas entornos.
function saludo() {
  console.log(`hola ${nombre}`)
}
saludo() //hola Victor.

function saludo2(nombre) { //Aqui creariamos una Escope LOCAL
  //Solo podriamos acceder dentro de esta FUNCION.
  console.log(`hola ${nombre}`)
}
saludo2("Eric") //hola Eric

function saludo3() { 
  var nombre = 'Eric'//Aqui creariamos una Escope LOCAL
  //Y pasaria lo mismo que en el Ejemplo saludo2()
  console.log(`hola ${nombre}`)
}
saludo3() //hola Eric

function saludo4() { 
  nombre = 'Eric'
  //Al quitarle el el VAR, Javascript ira a buscar en su primer SCOPE (la funcion)
  // A ver si encuenta "nombre" para modificarlo, si no lo encuentra, subira 
  //un nivel de SCOPE (en este caso el GLOBAL) y modificara nuestra Var nombre = 'Victor'
  //Y pasaria lo mismo que en el Ejemplo saludo2()
  console.log(`hola ${nombre}`)
}
saludo4() //hola Eric

function saludo5() { 
  if(true) {
    var nombre = 'Eric'
  }
  //Mostrara Eric, porque  aunque nosotros definamos ese "NOMBRE" dentro del contexto del IF
  //Sigue estando dentro de la SCOPE de la funcion.
  console.log(`hola ${nombre}`)
}
saludo5() //hola Eric

console.log(`==================== Class 14 ====================`)
function suma(...numeros) {
  return numeros.reduce(function (acum, numero) {
    acum += numero
    return acum
  }, 0)
}
const dobles = (...numeros) => numeros.map(numero => numero * 2)
const pares = (...numeros) => numeros.filter(numero => numero % 2 == 0)

console.log(`==================== Class 15 ====================`)
function saludarFamilia(apellido) {
  return function saludarMiembroDeFamilia(nombre) {
    console.log(`Hola ${nombre} ${apellido}`)
  }
}
const saludarGomez = saludarFamilia("Gomez")
const saludarPerez = saludarFamilia("Perez")
const saludarRomero = saludarFamilia("Romero")

saludarGomez("Pedro")
saludarGomez("Juan")
saludarGomez("Laura")
saludarGomez("Mónica")

saludarPerez("Dario")
saludarPerez("Martin")
saludarPerez("Julieta")

saludarRomero("Jorge")
// -------------Forma 1----------------
function makePrefixer(prefix){
	return function addPrefixer(word){
		console.log(prefix+word)
	}
}
// -------------Forma 2----------------
function makePrefixer(prefix){
	return word => prefix + word
}
// -------------Forma 3----------------
const makePrefixer = fix => re => fix + re;

const prefijoRe = makePrefixer("re")
prefijoRe("bueno")
const howFix = makePrefixer('Cipote')  //prefix = fix(Cipote) => re => fix(Cipote) + re
howFix('concha')   // prefix = fix(Cipote) => re(concha) => fix(Cipote) + re(concha)
//CipoteConcha

