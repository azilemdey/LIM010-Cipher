//CONSTANTES CON LOS NOMBRES DE 1ERA VENTANA, 2DA VENTANA Y LA VENTANA  FINAL 
const login = document.getElementById('login');
const ingresar = document.getElementById('ingresar_texto');
const final = document.getElementById('final');

//CONTRASEÑA CORRECTA 
const contrasenaCorrecta = 'LABORATORIA';
//INTENTOS INCORRECTOS
let intentos = 0;
const tresInt = () => {

	const contrasena= document.getElementById('contrasena');

	if (contrasena.value === contrasenaCorrecta) {
		login.classList.add('hidden');
		ingresar.classList.replace('hidden', 'show');
	} else {
		if (intentos < 2) {
			contrasena.value = '';
			intentos++;
			alert('Intentalo de nuevo')
		} else {
			login.classList.add('hidden');
			final.classList.replace('hidden', 'show');
		}
	}
}
//RELACION ENTRE EL EVENTO Y LA CONSTANTE 3 INTENTOS
const btnIngresar = document.getElementById('ingresar');
btnIngresar.addEventListener('click', tresInt);

//CONSTANTES LA 3ERA VENTANA, 4TA VENTANA. LAS CAJAS RESULTADO DE CIFRADO Y DESCIFRADO
const cifrar1 = document.getElementById('cifrar1');
const descifrar1 = document.getElementById('descifrar1');
let textoCifrado2 = document.getElementById('texto-cifrado');
let textoDescifrado2 = document.getElementById('texto-descifrado');

//RELACION ENTRE EL BOTON Y LA FUNCION ENCODE
const cifrar = document.getElementById('cifrar');
cifrar.addEventListener('click', () => {
	let offset2 = document.getElementById('offset1').value
	let texto2 = document.getElementById('texto-1').value
	const ok = cipher.encode(offset2, texto2);
	ingresar.classList.replace('show', 'hidden');
	cifrar1.classList.replace('hidden', 'show');
	textoCifrado2.value = ok;
	
	});

//RELACION ENTRE EL BOTON Y LA FUNCION DECODE

const descifrar = document.getElementById('descifrar');
descifrar.addEventListener('click', () => {
	let offset2 = document.getElementById('offset1').value
	let texto2 = document.getElementById('texto-1').value
	const ok2 = cipher.decode(offset2, texto2);
	ingresar.classList.replace('show', 'hidden');
	descifrar1.classList.replace('hidden', 'show');
	textoDescifrado2.value = ok2;
});

//PARA REGRESAR A INGRESAR EL TEXTO- DESDE TEXTO CIFRADO
const nuevo = document.getElementById('nvo-1');
nuevo.addEventListener('click', () => {
	let texto2 = document.getElementById('texto-1')
	texto2.value=' ';
	textoCifrado2.value=' ';
	ingresar.classList.replace('hidden', 'show');
	cifrar1.classList.replace('show', 'hidden');
	
});

//PARA REGRESAR A INGRESAR EL TEXTO- DESDE TEXTO DESCIFRADO
const nuevo2 = document.getElementById('nvo-2');
nuevo2.addEventListener('click', () => {
	let texto2 = document.getElementById('texto-1')
	texto2.value=' ';
	textoDescifrado2.value=' ';
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