import React,{useState} from "react";
import NoteList from "./NoteList";

function Sidebar({notes, setNotes, clickNote}) {
  const [title, setTitle]= useState('Default')
  const [body, setBody]= useState('extra...')

  const createNewNote = () => { 
    const newNote ={ title, body}
    setNotes(prevNotes=> [newNote,...prevNotes])
   
}  
// const newBtn = () =>{
//  console.log(createNewPlant())
// }

  return (
    <div className="master-detail-element sidebar">
      <NoteList  clickNote={clickNote} notes={notes} />
      <button onClick={()=>createNewNote()}>New</button>
    </div>
  );
}

export default Sidebar;
