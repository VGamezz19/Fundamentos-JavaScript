export default function  platzom  (str)  {
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