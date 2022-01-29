const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let lettersArr = [];
    let coderArr = [];
    let coderValue = "";
    let result = [];

    for (let i = 0; i < expr.length; i += 10) {
      lettersArr.push(expr.slice(i, i+10));
    }

    lettersArr.forEach(element => {
       for(let i = 0; i < element.length; ){
          if(element[i] == 1 && element[i + 1] == 1){
           coderValue = coderValue + "-";
            i = i + 2;
         } else if(element[i] == 1 && element[i + 1] == 0){
           coderValue = coderValue + ".";
           i = i + 2;
         } else if(element[i] == "*"){
           coderValue = " ";
           i = 10;
         } else{
           i++;
         }
       }
      coderArr.push(coderValue);
      coderValue = "";
    });
    
    for(let i = 0; i < coderArr.length; i++){
      if(coderArr[i] == " "){
        result.push(" ");
      }
      for(let key in MORSE_TABLE){
        if(coderArr[i] == key){
          result.push(MORSE_TABLE[key]);
        }
      }
    }
    
    return(result.join(""));
  }

module.exports = {
    decode
}
