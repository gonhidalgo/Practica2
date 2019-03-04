class EventEmitter{
    constructor (){
        this.eventos = {};
    }

    emit(event, args){
        if(this.eventos[event]){
            this.eventos[event].forEach(callback => callback(args));

        }
    }

    on(event, callback){
        this.eventos[event] = this.eventos[event] || [];
        this.eventos[event].push(callback);
    }
}

exports = module.exports =EventEmitter;