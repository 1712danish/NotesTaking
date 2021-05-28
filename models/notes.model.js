const mongoose = require('mongoose')

const notesSchema = mongoose.Schema({
    title:{
        type: String
    },
    body:{
        type: String
    }
})

const Note = mongoose.model('Note', notesSchema)

module.exports ={Note}