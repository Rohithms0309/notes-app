const { default: chalk } = require('chalk');
const fs = require('fs')

const getNotes = () => {
    return 'your Notes'
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote =notes.find((note) => note.title === title)

    if(!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)

        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

const removeNote = (title) => {

    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title != title)

    if(notesToKeep.length < notes.length) {
        console.log(chalk.bgGreen("Note removed!"))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.bgRed("No note found!"))
    }
    
}

const listNotes = () => {
    const notes= loadNotes()

    console.log(chalk.inverse("Your Notes!!"))
    const notesList = notes.forEach(note => {
        console.log(note.title)
        
    });
}

const readNotes = (title) => {
    const notes = loadNotes()
    const readNote = notes.find((note) => note.title === title)

    if(readNote) {
        console.log(chalk.blue.inverse(readNote.title))
        console.log(readNote.body)
    } else {
        console.log(chalk.red.inverse('Note not found!'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
    
}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}