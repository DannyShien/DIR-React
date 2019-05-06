import React, { Component } from 'react';
import NotesList from  './NotesList';
import NotesDetails from './NotesDetails';



export default class Notes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedNote: '1001',
            notes: [ // This will hold an array of objects
                {
                    id: '1001', 
                    title: 'first note',
                    text: ''
                },
                {
                    id: '1002', 
                    title: 'second note', 
                    text: ''
                },
                {
                    id: '1003', 
                    title: 'third note',
                    text: '',
                }
            ]
        }
    }

    render() {
        const theNote = this.state.notes.find(note => this.state.selectedNote === note.id);
        return (
            <div>
                <NotesList 
                    notes={this.state.notes}
                    handleSelection={this.selectNote}
                />
                <NotesDetails 
                    note={theNote}
                />
            </div>
        )
    }

    selectNote = (id) => {
        // choose a note to show
        this.setState({
            selectNote: id
        });
    }

};