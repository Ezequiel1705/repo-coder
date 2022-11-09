const fs = require('fs');

class Contenedor {

    arratObj = new Array();

    constructor(nArchivo){
        this.nArchivo = nArchivo;
        if(fs.existsSync(nArchivo)){
            this.arratObj = JSON.parse(fs.readFileSync(this.nArchivo, 'utf8'))
            console.log("Nombre de archivo existe")

        } else {
            console.log("Nombre de archivo no existe")
        }
    }

    async save (object){
        if(object === producto1){
            console.log('El product ya exite')
        }else {
            this.arratObj.push(object)
        }
    }
    
    async getAll (){
        return this.arratObj
    }


    async deleteAll (){
        this.arratObj = []
        delete this.arratObj[producto1, producto2]
    }

}


let producto1 = {title: Television, price: 22.5, thumbnail: 'https://picsum.photos/id/237/200'}
let producto2 = {title: Puerta, price: 30.5, thumbnail: 'https://picsum.photos/id/237/200'}

const productosContenedor = new Contenedor

productosContenedor.save()
productosContenedor.getAll()
productosContenedor.deleteAll()
