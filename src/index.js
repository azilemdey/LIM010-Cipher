const login=document.getElementById('login');
const ingresar=document.getElementById('ingresar_texto');
const final=document.getElementById('final');

//CONTRASEÑA CORRECTA 
const contrasena_correcta='LABORATORIA';
//INTENTOS INCORRECTOS
let intentos=0;
const tres_int= () =>{

const contrasena=document.getElementById('contrasena');

if(contrasena.value===contrasena_correcta){
    login.classList.add('hidden');
    ingresar.classList.replace('hidden','show');
} else{
    if(intentos<2){
        alert('intentalo de nuevo');
        contrasena.value='';
        intentos++;
}else{
    login.classList.add('hidden');
    final.classList.replace('hidden','show');}}}

const btn_ingresar=document.getElementById('btn');
btn_ingresar.addEventListener('click',tres_int);

//CIFRAR 1= NOMBRE DE LA SECCION 
const cifrar1=document.getElementById('cifrar1');
const ingresar_texto=document.getElementById('ingresar_texto');
let texto_cifrado2=document.getElementById('texto_cifrado');
let texto_descifrado2=document.getElementById('texto_descifrado');
//CONSTANTE PARA QUE ME DE LA INFORMACION DEL TEXTO 

//
const cifrar = document.getElementById('cifrar');
	cifrar.addEventListener('click', ()=>{
	const offset2=document.getElementById('offset1').value
	const texto_2=document.getElementById('texto_1').value
	const ok = cipher.encode(offset2,texto_2);
	ingresar_texto.classList.replace('show','hidden');
    cifrar1.classList.replace('hidden','show');
    texto_cifrado2.value=ok;
	});
	
const descifrar1=document.getElementById('descifrar1');

const descifrar = document.getElementById('descifrar');
	descifrar.addEventListener('click', ()=>{
	const offset2=document.getElementById('offset1').value
	const texto_2=document.getElementById('texto_1').value
	const ok2 = cipher.decode(offset2,texto_2);
	ingresar_texto.classList.replace('show','hidden');
    descifrar1.classList.replace('hidden','show');
	texto_descifrado2.value=ok2;
	});

//para poner nuevo texto 
const nuevo=document.getElementById('nvo_1');
nuevo.addEventListener('click',()=>{
ingresar_texto.classList.replace('hidden','show');
cifrar1.classList.replace('show','hidden');
});


const nuevo2=document.getElementById('nvo_2');
nuevo2.addEventListener('click',()=>{
ingresar_texto.classList.replace('hidden','show');
descifrar1.classList.replace('show','hidden');
});


const finalizar=document.getElementById('finalizar')
finalizar.addEventListener('click',()=>{
cifrar1.classList.replace('show','hidden');
final.classList.replace('hidden','show')

});

const finalizar2=document.getElementById('finalizar2')
finalizar2.addEventListener('click',()=>{
descifrar1.classList.replace('show','hidden');
final.classList.replace('hidden','show')

})
//const mayus=document.getElementById(texto_1).toLowerCase()
