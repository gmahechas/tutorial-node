function saludar(titulo, anio) {
	console.log(`Hola, soy ${this.nombre}. Este es mi ${titulo} del año ${anio}.`);
}

const persona = {
	nombre: 'Alice'
};

// Usando .call()
saludar.call(persona, 'libro', '2021');
// Salida: "Hola, soy Alice. Este es mi libro del año 2021."