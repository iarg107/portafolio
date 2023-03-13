function valida(input){
	const tipoInput = input.dataset.tipo;
	if (validadores[tipoInput]){ 
		validadores[tipoInput](input);
	}
}

//La ejecucion del codigo comienza AQUI!!!
const inputs = document.querySelectorAll("input");

	inputs.forEach(input => { 
		input.addEventListener("blur", (input) =>{ 
			valida(input.target); 			
		})
	})
	
const validadores={
	nombre: input =>validarInput(input), 
	email: input =>validarInput(input),
	asunto: input =>validarInput(input),
	mensaje: input =>validarInput(input)
}

function validarInput(input){ 
	const valorInput = input.value; 
	var mensaje = (`El campo ${input.dataset.tipo}, obligatoriamente debe ser llenado`);
	var mensajeUnico = "";	
	if(input.validity.valueMissing){	
		
	input.setCustomValidity(mensaje);
	}	
	if(input.dataset.tipo == "email" && input.validity.typeMismatch){
	mensajeUnico = "El correo no es valido";
	input.setCustomValidity(mensajeUnico);
	}
	
}