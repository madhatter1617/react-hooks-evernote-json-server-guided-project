import React from "react";
import NoteItem from "./NoteItem";


function NoteList({notes, clickNote, editNote}) {
 

  return (
    <ul>
      {/* Render list of notes here... */}
      {notes.map(note => <NoteItem  clickNote={clickNote} key={note.id} note={note} />)}
    </ul>
  );
}

export default NoteList;
