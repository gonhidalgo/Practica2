
//Importar  modulo Later.js
var later= require ('later');
const EventEmitter = require ('./events');

class Programador extends EventEmitter{

	constructor(parametros){
		super();
		later.date.localTime();
		parametros.forEach(({hora, temperatura}) => {
			const shed = later.parse.text(`at ${hora}`);
		later.setInterval(() => {this.emit('ideal', temperatura)}, shed);
		})
	}

}

exports = module.exports = Programador;
