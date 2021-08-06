import React from "react";
import NoteItem from "./NoteItem";


function NoteList({notes, clickNote, noteEd, setNoteEd}) {
 

  return (
    <ul>
      {/* Render list of notes here... */}
      {notes.map(note => <NoteItem  setNoteEd={setNoteEd} noteEd={noteEd} clickNote={clickNote} key={note.id} note={note} />)}
    </ul>
  );
}

export default NoteList;
