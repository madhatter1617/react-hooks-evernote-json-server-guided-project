import React from "react";
import NoteViewer from "./NoteViewer";


function NoteItem({note, note:{title, body}, clickNote}) {

  return (
    <li  onClick = {()=> clickNote(note)} >    
      <h2>{title}</h2> 
      <p>{body.substring(0, 69)}</p>
    </li>
  );
}

export default NoteItem;
