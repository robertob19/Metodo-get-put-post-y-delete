import mongoose from "mongoose";

const ejemploSchema = new mongoose.Schema({
nombre:{
    type: String,
    requerid: true
},
apellido:{
    type: String,
    requerid: true
},
edad:{
    type: Number,
    requerid: false
},
contacto:{
    type: [String],
    requerid: false
}

})

const Ejemplo = mongoose.model('Ejemplo', ejemploSchema)

export default Ejemplo;