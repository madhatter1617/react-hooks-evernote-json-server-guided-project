import React from "react";

function NoteViewer(props ) {
  // {note:{title, body}, setNoteEd, editNote, noteEd, note }
  //make a function to make edit note ture 
  const editBtn = () => {
    
    console.log(props)
      props.editNote(!props.noteEd)
      props.setNewEdit(props.note)

    
  
  }
  return (
    <>
       <h2>{props.note.title}</h2>
      <p>{props.note.body}</p>
     
      <button onClick={()=> editBtn()} >Edit</button> 
    </> 
  );
}

export default NoteViewer;
