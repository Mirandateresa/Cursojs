//obejtos manipulacion 
const producto ={
    nombre : "tablet" ,
    precio : 300,
    disponibe: false
}
//no deja modificar ningun valor ni nada sobree el objteo ocupado
Object.freeze(producto)

//modificca prppedades existente pero no deja aadir nuevas propiedades
Object.seal(producto)

//rescribir un valor 
producto.disponibe = "True"
//si no existe una prppieda la añade
producto.imagen='imagem.jpg'


//eliminar una propiedad 

delete  producto.precio

console.log (producto)
