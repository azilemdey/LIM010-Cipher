//CONSTANTES CON LOS NOMBRES DE 1ERA VENTANA, 2DA VENTANA Y LA VENTANA  FINAL 
const login = document.getElementById('login');
const ingresar = document.getElementById('ingresar_texto');
const final = document.getElementById('final');

//CONTRASEÑA CORRECTA 
const contrasena_correcta = 'LABORATORIA';
//INTENTOS INCORRECTOS
let intentos = 0;
const tres_int = () => {

	const contrasena = document.getElementById('contrasena');

	if (contrasena.value === contrasena_correcta) {
		login.classList.add('hidden');
		ingresar.classList.replace('hidden', 'show');
	} else {
		if (intentos < 2) {
			contrasena.value = '';
			intentos++;
		} else {
			login.classList.add('hidden');
			final.classList.replace('hidden', 'show');
		}
	}
}
//RELACION ENTRE EL EVENTO Y LA CONSTANTE 3 INTENTOS
const btn_ingresar = document.getElementById('ingresar');
btn_ingresar.addEventListener('click', tres_int);

//CONSTANTES LA 3ERA VENTANA, 4TA VENTANA. LAS CAJAS RESULTADO DE CIFRADO Y DESCIFRADO
const cifrar1 = document.getElementById('cifrar1');
const descifrar1 = document.getElementById('descifrar1');
let texto_cifrado2 = document.getElementById('texto_cifrado');
let texto_descifrado2 = document.getElementById('texto_descifrado');

//RELACION ENTRE EL BOTON Y LA FUNCION ENCODE
const cifrar = document.getElementById('cifrar');
cifrar.addEventListener('click', () => {
	let offset2 = document.getElementById('offset1').value
	let texto_2 = document.getElementById('texto_1').value
	const ok = cipher.encode(offset2, texto_2);
	ingresar.classList.replace('show', 'hidden');
	cifrar1.classList.replace('hidden', 'show');
	texto_cifrado2.value = ok;
	
	});

//RELACION ENTRE EL BOTON Y LA FUNCION DECODE

const descifrar = document.getElementById('descifrar');
descifrar.addEventListener('click', () => {
	let offset2 = document.getElementById('offset1').value
	let texto_2 = document.getElementById('texto_1').value
	const ok2 = cipher.decode(offset2, texto_2);
	ingresar.classList.replace('show', 'hidden');
	descifrar1.classList.replace('hidden', 'show');
	texto_descifrado2.value = ok2;
});

//PARA REGRESAR A INGRESAR EL TEXTO- DESDE TEXTO CIFRADO
const nuevo = document.getElementById('nvo_1');
nuevo.addEventListener('click', () => {
	ingresar.classList.replace('hidden', 'show');
	cifrar1.classList.replace('show', 'hidden');
});

//PARA REGRESAR A INGRESAR EL TEXTO- DESDE TEXTO DESCIFRADO
const nuevo2 = document.getElementById('nvo_2');
nuevo2.addEventListener('click', () => {
	ingresar.classList.replace('hidden', 'show');
	descifrar1.classList.replace('show', 'hidden');
});

//PARA FINALIZAR- DESDE TEXTO CIFRADO
const finalizar = document.getElementById('finalizar')
finalizar.addEventListener('click', () => {
	cifrar1.classList.replace('show', 'hidden');
	final.classList.replace('hidden', 'show')

});
//PARA FINALIZAR- DESDE TEXTO DESCIFRADO
const finalizar2 = document.getElementById('finalizar2')
finalizar2.addEventListener('click', () => {
	descifrar1.classList.replace('show', 'hidden');
	final.classList.replace('hidden', 'show')

});

//PARA BORRARLO TODO 
const borrar =document.getElementById('borrar')
borrar.addEventListener('click',()=>{
let texto_2 = document.getElementById('texto_1')
texto_2.value=' ';
texto_cifrado2.value=' ';
texto_descifrado2.value=' ';
})