const fs = require('fs');

class Contenedor {
    constructor(nameFile){
        this.nameFile = nameFile;
    }
    async getOneRadom() {
        const fileRead = JSON.parse(await fs.promises.readFile(`./${this.nameFile}.txt`, 'utf-8'));
        if(fileRead.length ==0) {
            console.log("El archivo esta en blanco");
            return fileRead;
        }
        const cntTotal = fileRead.length;
        const auxSelectedRandom = Math.floor(Math.random() * cntTotal);
        return fileRead[auxSelectedRandom];
    }
    async getAll() {
        const fileRead = JSON.parse(await fs.promises.readFile(`./${this.nameFile}.txt`, 'utf-8'));
        if(fileRead.length ==0) {
            console.log("El archivo esta en blanco");
            return fileRead;
        }
        return fileRead;
        
    }
}

module.exports = new Contenedor('Productos');