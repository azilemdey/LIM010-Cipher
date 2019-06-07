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
        console.log('intentalo de nuevo');
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
//CIFRAR= NOMBRE DE MI BOTON
const cifrar=document.getElementById('cifrar');
cifrar.addEventListener('click', ()=>{
    ingresar_texto.classList.replace('show','hidden');
    cifrar1.classList.replace('hidden','show')});
