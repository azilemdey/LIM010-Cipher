window.cipher= {
  encode: (offset1,texto_1) =>
  {
    let resolver='';  
    
    for (let i =0; i < texto_1.length; i++)
       {
           const ascci = texto_1[i].charCodeAt();
           if(ascci>=65 && ascci<=90)
                {
                const code = ((ascci-65)+(parseInt(offset1)))%26+65;
                resolver += String.fromCharCode(code);
                }
        }
    return resolver;
  },
};


/*for (let i =0; i < texto_1.length; i++)
       {
           const ascci = texto_1[i].charCodeAt();
           if(ascci>=65 && ascci<=90)
                {
                const code = ((ascci-65)+(parseInt(offset1)))%26+65;
                resolver += String.fromCharCode(code);
                }
        }
    return resolver;

*/




  //decode: (offset, string) => {
    /* Acá va tu código que descifra*/
  //}

 //resolver += string.fromCharCode(string[i].charcodeat()-65+parseInt(offset)%26+65);