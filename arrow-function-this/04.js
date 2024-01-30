function saludar(titulo, anio) {
	console.log(`Hola, soy ${this.nombre}. Este es mi ${titulo} del año ${anio}.`);
}

const persona = {
	nombre: 'Bob'
};

// Usando .apply()
saludar.apply(persona, ['artículo', '2022']);
// Salida: "Hola, soy Bob. Este es mi artículo del año 2022."