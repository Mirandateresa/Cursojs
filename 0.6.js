 //destructuring de dos o  mas objetos

const producto ={
    nombre : "Alana" ,
    precio : 300,
    disponibe: false
}

const clientes = {
nombre : "mariel",
premium : true
}


const{nombre}= producto
const{nombre:nombreCliente}= clientes

console.log(nombre)
console.log(nombreCliente)
