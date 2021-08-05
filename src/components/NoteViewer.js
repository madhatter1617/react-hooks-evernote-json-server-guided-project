import React from "react";

function NoteViewer({note:{title, body}, setNoteEd, editNote, noteEd }) {
  //make a function to make edit note ture 
  const editBtn = () => {
      editNote(!noteEd)
    
  
  }
  return (
    <>
      <h2>{title}</h2>
      <p>{body}</p>
      <button onClick={()=> editBtn()} >Edit</button>
    </>
  );
}

export default NoteViewer;
