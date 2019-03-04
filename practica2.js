
const Habitacion = require('./habitacion');
const Climatizador = require('./climatizador');
const Termostato = require('./termostato');
const Programador = require('./programador');
const EventEmitter = require('./events');

// Creamos una habitacion:
const dormitorio = new Habitacion();
dormitorio.temperatura = 22;

// Creamos un climatizador para la habitacion:
const climatizador = new Climatizador(dormitorio);

// Creamos un Termostato que mira la temperatura de la habitacion:
const termostato = new Termostato(dormitorio);

// Configuramos el termostato para controlar la temperatura:
termostato.on('muchofrio', () => climatizador.calentar());
termostato.on('muchocalor', () => climatizador.enfriar());

// Mostar la temperatura periodicamente:
termostato.on('tic', (temp) => console.log(`${temp.toFixed(1)}ºC`));

// Configurar la temp ideal a 20 grados:
termostato.indicarTemperaturaIdeal(20);

const programador = new Programador ([ {hora: "20:14", temperatura: 40},{hora: "09:00", temperatura: 18}, {hora: "16:00", temperatura: 21}, {hora: "21:00", temperatura:20},]);
programador.on ( 'ideal', temperatura => {
	termostato.indicarTemperaturaIdeal(temperatura);
})

// Encender el termostato:
termostato.encender();

