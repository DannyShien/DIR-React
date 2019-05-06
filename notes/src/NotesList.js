import React from 'react';


function NotesListItems({id, text, handleClick}) {
    return (
        <li>
            <a 
                href='#'
                onClick={(e) => {
                    e.preventDefault();
                    console.log('CLICKED');
                    handleClick(id);
                }}
            >
                {text}
            </a>
        </li>
    );
}

export default function NotesList({notes, handleSelection}) {
    // const items = notes.map(({title}) => <NotesListItems text={title}/>);
    const items = notes.map(note => <NotesListItems id={note.id} text={note.title} handleClick={handleSelection}/>);
    return (
        <ul className='list'>
            {items}
        </ul>
    )
};