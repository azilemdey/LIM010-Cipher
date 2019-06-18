window.cipher = {
  encode: (offset, string) => {
    let resolver = '';
    for (let i = 0; i < string.length; i++) {
      const ascci = string[i].charCodeAt();
      if (ascci >= 65 && ascci <= 90) {
        const code = ((ascci - 65) + (parseInt(offset))) % 26 + 65;
        resolver += String.fromCharCode(code);
      } else {
        if (ascci >= 97 && ascci <= 122) {
          const code = ((ascci - 97) + (parseInt(offset))) % 26 + 97;
          resolver += String.fromCharCode(code);
        }
        else { resolver += ' ' }
      }
    }
    return resolver;
  },

  decode: (offset, string) => {
    let solucion = '';

    for (let i = 0; i < string.length; i++) {
      const ascci = string[i].charCodeAt();
      if (ascci >= 65 && ascci <= 90) {
        let code1 = ((ascci - 65 - parseInt(offset)) % 26);
        if (code1 < 0) { code1 = code1 + 91 }
        else { code1 = code1 + 65 }
        solucion += String.fromCharCode(code1);

      }
    }

    return solucion;
  }


  /* Acá va tu código que descifra*/
  //}
};




/*
    #texto_1{
    text-transform: uppercase;
}

*/


  //decode: (offset, string) => {
/* Acá va tu código que descifra*/
  //}

 //resolver += string.fromCharCode(string[i].charcodeat()-65+parseInt(offset)%26+65);