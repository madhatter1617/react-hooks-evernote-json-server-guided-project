import React,{useState, useEffect, useCallback}  from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";


function NoteContainer() {

  const[search, setSearch] = useState("")

  const [notes, setNotes] = useState([])

  const [note, setNote] = useState(false)

  const [noteEd, setNoteEd] = useState(false)

  useEffect(() => {
    fetch("http://localhost:3000/notes")
    .then(res => res.json())
    .then(data => setNotes(data))
  }, [])
 // console.log(notes)

  //console.log(search)
const searchedNote=()=>{
  if(search.length > 0){
    return notes.filter(noot => noot.title.toLowerCase().includes(search.toLowerCase())) 
  }
  return notes
}

const clickNote = (note) => {
  setNote(note)
}
const editNote = (noteEd) => {

  setNoteEd(noteEd)
}
 
  return (
    <>
      <Search setSearch={setSearch} />
      <div className="container">
        <Sidebar clickNote={clickNote} setNotes={setNotes} notes={searchedNote()}/>
        <Content editNote={editNote} setNoteEd={setNoteEd} note={note} noteEd={noteEd} />
      </div>
    </>
  );
}

export default NoteContainer;
