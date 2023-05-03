const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

// Customize yargs version

yargs.version('1.1.0')


// add, remove, read, list notes

// Create add command

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log('Adding a new note!')
    }

})

// Create remove command

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Remove the note!')
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List the notes',
    handler: function () {
        console.log('Listing the notes!')
    }
})

// Read the notes
yargs.command({
    command: 'read',
    describe: 'Read the note',
    handler: function () {
        console.log('Read the notes!')
    }
})

console.log(yargs.argv)