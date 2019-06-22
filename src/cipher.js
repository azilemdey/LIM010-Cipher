window.cipher = {
  encode: (offset, string) => {
    let resolver = '';
    for (let i = 0; i < string.length; i++) {
      const ascci = string[i].charCodeAt();
      if (ascci >= 65 && ascci <= 90) {
        let code = ((ascci - 65) + (parseInt(offset))) % 26 + 65;
        resolver += String.fromCharCode(code);
      } else {
        if (ascci >= 97 && ascci <= 122) {
        let code = ((ascci - 97) + (parseInt(offset))) % 26 + 97;
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
        let code1 = ((ascci - 90 - parseInt(offset)) % 26)+90;
        solucion += String.fromCharCode(code1);
      }
     else{if (ascci >= 97 && ascci <= 122) {
        let code1 = ((ascci - 122)-(parseInt(offset))) % 26+122;
        solucion += String.fromCharCode(code1);
      }
      else { solucion += ' ' }
    }
  }

    return solucion;
  }
};